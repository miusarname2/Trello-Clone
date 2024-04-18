using System.ComponentModel.DataAnnotations;

namespace TrelloBackend.Model.DataModel
{
    public class Table : BaseEntity
    {
        [Required,StringLength(75)]
        public string Name { get; set; }
        [StringLength(255)]
        public string Description { get; set; }
        public int UserId { get; set; }
        public ICollection<Column> Columns { get; set; } = new List<Column>();
    }
}
