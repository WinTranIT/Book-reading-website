using System.ComponentModel.DataAnnotations.Schema;

[Table("bookchapters")]
public class BookChapter
{
    [Column("chapterid")]
    public int ChapterId { get; set; }

    [Column("bookid")]
    public int BookId { get; set; }

    [Column("chaptertitle")]
    public string ChapterTitle { get; set; }

    [Column("chapternumber")]
    public int ChapterNumber { get; set; }

    [Column("content")]
    public string Content { get; set; }
}
