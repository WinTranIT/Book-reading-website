using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Options;

public interface IEmailService
{
    Task SendEmailAsync(string toEmail, string message);
}

public class EmailService : IEmailService
{
    private readonly SmtpSettings _smtpSettings;

    public EmailService(IOptions<SmtpSettings> smtpSettings)
    {
        _smtpSettings = smtpSettings.Value;
    }

    public async Task SendEmailAsync(string toEmail, string message)
    {
        using (var client = new SmtpClient(_smtpSettings.Server, _smtpSettings.Port))
        {
            client.Credentials = new NetworkCredential(_smtpSettings.Username, _smtpSettings.Password);
            client.EnableSsl = _smtpSettings.UseSSL;
            string subject = "Lấy lại mật khẩu nè!";
            string mess = "Có mật khẩu mà cũng để quên nữa thì đây là mã xác nhận để lấy lại mật khẩu nè: " + message;
            var mailMessage = new MailMessage
            {
                From = new MailAddress(_smtpSettings.SenderEmail, _smtpSettings.SenderName),
                Subject = subject,
                Body = mess,
                IsBodyHtml = true
            };

            mailMessage.To.Add(toEmail);

            await client.SendMailAsync(mailMessage);
        }
    }
}
