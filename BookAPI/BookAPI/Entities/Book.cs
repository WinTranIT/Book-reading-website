using System.ComponentModel.DataAnnotations;

namespace BookAPI.Entities
{
    public class Book
    {
        [Key]
        public int BookId { get; set; }

        [Required]
        [StringLength(255)]
        public string Title { get; set; }

        [Required]
        [StringLength(255)]
        public string Author { get; set; }

        [Required]
        public DateTime PublishedDate { get; set; }

        [StringLength(1000)]
        public string Description { get; set; }

        [Required]
        public string Genre { get; set; }

        public string CoverImageUrl { get; set; }
}
}
