using BookAPI.Data;
using BookAPI.Entities;
using BookAPI.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        // readonly để giúp toàn vẹn dữ liệu 
        private readonly DataContext _context;
        public UserController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            //AnyAsync nhận một biểu thức điều kiện và
            //kiểm tra xem có bất kỳ bản ghi nào thỏa mãn
            //điều kiện đó trong cơ sở dữ liệu.
            if ( await _context.Users.AnyAsync(u => u.Email == model.Email)){
                return BadRequest("Email already in use.");
            }
            var user = new User { 
                Email = model.Email,
                Password = model.Password
            };
            _context.Users.Add(user);
            // await _context.SaveChangesAsync(); là một phương thức được sử dụng để
            // lưu tất cả các thay đổi đã thực hiện trên các đối tượng được theo dõi
            // bởi DbContext vào cơ sở dữ liệu
            await _context.SaveChangesAsync();

            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] RegisterModel model)
        {
            // check email co trong csdl k 
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
            if (user == null)
            {
                return BadRequest("Email not valid");
            }
            if (user.Password == model.Password)
            {
                return Ok(user);
            }
            return BadRequest("Password not valid");
        }

        [HttpPut("change-password")]
        public async Task<IActionResult> ChangePassword([FromBody] RegisterModel model)
        {
            // check email co trong csdl k 
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
            if (user == null)
            {
                return BadRequest("Email not valid");
            }
            user.Password = model.Password;
            _context.Users.Update(user);
            _context.SaveChanges();
             return Ok("chang success!");
            
            
        }
    }
}
