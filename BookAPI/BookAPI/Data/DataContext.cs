using BookAPI.Entities;
using Microsoft.EntityFrameworkCore;
namespace BookAPI.Data
{
    public class DataContext : DbContext
    {
        // Constructor cho BookContext, nhận tham số DbContextOptions và truyền nó cho lớp cơ sở DbContext.
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        // DbSet đại diện cho tập hợp tất cả các thực thể Book được truy vấn từ cơ sở dữ liệu.
        public DbSet<Book> Books { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
