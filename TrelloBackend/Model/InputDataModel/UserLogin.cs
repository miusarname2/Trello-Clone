using System.ComponentModel.DataAnnotations;

namespace TrelloBackend.Model.InputDataModel
{
    public class UserLogin
    {
        [Required,EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
