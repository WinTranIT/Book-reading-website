namespace BookAPI.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; } = "User";
        public string name { get; set; }
        public string phone { get; set; }
        public string address { get; set; }
        public string urlavatar { get; set; }

    }

}
