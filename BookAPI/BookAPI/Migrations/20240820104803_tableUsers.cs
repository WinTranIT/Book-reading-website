using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookAPI.Migrations
{
    /// <inheritdoc />
    public partial class tableUsers : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
            table: "Users",
            columns: new[] { "Id", "Email", "Password", "Role" }, // Danh sách các cột
            values: new object[,]
                {
                    { 1, "he@gmail.com", "1","admin" },
                    { 2, "hehe@hehe", "2", "user" },
                    { 3, "hihi@haha", "3", "user" }
                }
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
