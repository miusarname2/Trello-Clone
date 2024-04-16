using System.ComponentModel.DataAnnotations;

namespace TrelloBackend.Model.DataModel
{
    public class User : BaseEntity
    {
        [Required,StringLength(75)]
        public string UserName { get; set; }
        [Required,StringLength(150)]
        public string FullName { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Email { get; set; }
        
    }
}
