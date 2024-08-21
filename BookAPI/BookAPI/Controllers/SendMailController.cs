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
    public async Task<IActionResult> SendEmail([FromBody] SendMailModel sm)
    {
        try
        {
            await _emailService.SendEmailAsync(sm.Email, sm.Message);
            return Ok("Email sent successfully!");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }
}
