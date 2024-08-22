using BookAPI.Data;
using BookAPI.Entities;
using BookAPI.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Timers;

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
            var books = await _context.Books.AsNoTracking().ToListAsync();
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
        public async Task<ActionResult<Book>> AddBook(AddBookModel book)
        {
            if (book == null)
            {
                return BadRequest("Book data is required.");
            }

            // Kiểm tra tính hợp lệ của dữ liệu đầu vào
            if (string.IsNullOrWhiteSpace(book.Title) ||
                string.IsNullOrWhiteSpace(book.Author) ||
                book.PublishedDate == null ||  // Kiểm tra nếu PublishedDate không hợp lệ
                string.IsNullOrWhiteSpace(book.Genre) ||
                string.IsNullOrWhiteSpace(book.CoverImage))
            {
                return BadRequest("Incomplete book data.");
            }

            var maxBookId = await _context.Books.AnyAsync()
                ? await _context.Books.MaxAsync(b => b.BookId)
                : 0;

            var newBook = new Book
            {
                BookId = maxBookId + 1,
                Title = book.Title,
                Author = book.Author,
                PublishedDate = book.PublishedDate.ToUniversalTime(),
                Description = book.Description,
                Genre = book.Genre,
                CoverImageUrl = book.CoverImage
            };

            _context.Books.Add(newBook);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                // Thêm logging chi tiết hơn
                Console.Error.WriteLine($"Error saving book: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, $"Internal server error: {ex.Message}");
            }

            return Ok("Add success!");
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
