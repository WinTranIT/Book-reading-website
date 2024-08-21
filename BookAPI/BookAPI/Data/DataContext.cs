using BookAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace BookAPI.Data
{
    public class DataContext : DbContext
    {
        // Constructor cho DataContext, nhận tham số DbContextOptions và truyền nó cho lớp cơ sở DbContext.
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        // DbSet đại diện cho tập hợp tất cả các thực thể Book được truy vấn từ cơ sở dữ liệu.
        public DbSet<Book> Books { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<BookChapter> BookChapters { get; set; }

        // Phương thức OnModelCreating để cấu hình các mối quan hệ và ánh xạ bảng với các lớp thực thể
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Ánh xạ các bảng với các thực thể
            modelBuilder.Entity<BookChapter>().ToTable("bookchapters");

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<BookChapter>()
                .HasKey(bc => bc.ChapterId); // Cấu hình ChapterId là khóa chính

        }
    }
}
