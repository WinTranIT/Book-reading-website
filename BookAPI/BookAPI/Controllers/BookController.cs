using BookAPI.Data;
using BookAPI.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly Data.DataContext _context;

        public BookController(Data.DataContext context)
        {
            _context = context;
        }

        //  async cho biết rằng phương thức này có thể chứa các thao tác không đồng bộ (asynchronous).
        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetBooks()
        {
            var books = await _context.Books.ToListAsync();
            return Ok(books);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBookById(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound("Book not found");
            }

            return Ok(book);
        }
        [HttpPost]
        public async Task<ActionResult<Book>> AddBook(Book book)
        {
            if (book == null)
            {
                return BadRequest("Book not valid");
            }

            _context.Books.Add(book);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBookById), new { id = book.BookId }, book);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }

            _context.Books.Remove(book);
            await _context.SaveChangesAsync();

            return Ok("Delete success");
        }
        [HttpPut]
        public async Task<IActionResult> UpdateBook(Book updateBook)
        {
            var dbBook = await _context.Books.FindAsync(updateBook.BookId);
            if (dbBook is null)
            {
                return NotFound("Book not found");
            }
            dbBook.Author = updateBook.Author;
            dbBook.Description = updateBook.Description;
            dbBook.CoverImageUrl = updateBook.CoverImageUrl;
            dbBook.Title = updateBook.Title;
            dbBook.Genre = updateBook.Genre;
            dbBook.PublishedDate = updateBook.PublishedDate;
            await _context.SaveChangesAsync();
            return Ok(await _context.Books.ToListAsync());

        }
        [HttpGet("latest")]
        public async Task<ActionResult<List<Book>>> GetLatestBooks()
        {
            var books = await _context.Books
                .OrderByDescending(b => b.PublishedDate) // Sắp xếp theo ngày đăng giảm dần
                .Take(4) // Lấy 4 sách
                .ToListAsync();

            return Ok(books);
        }
        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<Book>>> SearchBooks([FromQuery] string titlePart)
        {
            if (string.IsNullOrEmpty(titlePart))
            {
                return BadRequest("Search query cannot be empty.");
            }

            // Sử dụng EF.Functions.Like để thực hiện tìm kiếm không phân biệt chữ hoa chữ thường
            var books = await _context.Books
                .Where(b => EF.Functions.Like(b.Title, $"%{titlePart}%"))
                .ToListAsync();

            if (!books.Any())
            {
                return NotFound("No books found with the given title part.");
            }

            return Ok(books);
        }
        [HttpGet("chapters/{bookId}")]
        public async Task<ActionResult<IEnumerable<BookChapter>>> GetChaptersByBookId(int bookId)
        {
            var chapters = await _context.BookChapters
                                         .Where(c => c.BookId == bookId)
                                         .OrderBy(c => c.ChapterNumber)
                                         .ToListAsync();

            if (chapters == null || !chapters.Any())
            {
                return NotFound(new { message = "No chapters found for this book." });
            }
            return Ok(chapters);
        }
        }
    }
