namespace BookAPI.Model
{
    public class AddBookModel
    {
            public string Author { get; set; }
            public string Description { get; set; }
            public string Title { get; set; }
            public string Genre { get; set; }
            public DateTime PublishedDate { get; set; }
            public IFormFile CoverImage { get; set; }

    }
}
