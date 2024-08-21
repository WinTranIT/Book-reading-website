using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class EmailController : ControllerBase
{
    private readonly IEmailService _emailService;

    public EmailController(IEmailService emailService)
    {
        _emailService = emailService;
    }

    [HttpPost("send")]
    public async Task<IActionResult> SendEmail([FromForm] string toEmail, [FromForm] string message)
    {
        try
        {
            await _emailService.SendEmailAsync(toEmail, message);
            return Ok("Email sent successfully!");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }
}
