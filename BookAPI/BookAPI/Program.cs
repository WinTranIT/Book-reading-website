using BookAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace BookAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Cấu hình các dịch vụ và các tùy chọn cho ứng dụng.
            var builder = WebApplication.CreateBuilder(args);

            // Thêm dịch vụ DbContext và chỉ định chuỗi kết nối từ appsettings.json
            builder.Services.AddDbContext<DataContext>(options =>
                options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
                new MySqlServerVersion(new Version(8, 0, 2)))); // Thay đổi phiên bản MySQL nếu cần

            // Thêm dịch vụ CORS với chính sách cho phép mọi nguồn
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins",
                    builder => builder.AllowAnyOrigin()
                                      .AllowAnyMethod()
                                      .AllowAnyHeader());
            });

            // Đăng ký dịch vụ cho các controller MVC,
            // cho phép ứng dụng xử lý các yêu cầu HTTP và trả về kết quả từ các controller.
            builder.Services.AddControllers();

            // Thêm dịch vụ để khám phá các điểm kết thúc của API
            // hữu ích cho việc tạo tài liệu API.
            builder.Services.AddEndpointsApiExplorer();

            // Thêm dịch vụ để tạo tài liệu Swagger cho API,
            // cho phép bạn tự động tạo và hiển thị tài liệu API.
            builder.Services.AddSwaggerGen();

            // Xây dựng đối tượng WebApplication từ WebApplicationBuilder,
            // sẵn sàng để xử lý các yêu cầu HTTP.
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            // Sử dụng chính sách CORS đã cấu hình
            app.UseCors("AllowAllOrigins");

            app.UseAuthorization();

            // Đăng ký các route cho các controller,
            // cho phép ứng dụng xử lý các yêu cầu HTTP và ánh xạ
            // chúng đến các phương thức trong các controller.
            app.MapControllers();

            // Bắt đầu ứng dụng và bắt đầu xử lý các yêu cầu HTTP từ client.
            app.Run();
        }
    }
}
