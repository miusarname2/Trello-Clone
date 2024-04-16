using System.ComponentModel.DataAnnotations;

namespace TrelloBackend.Model.DataModel
{
    public class Column : BaseEntity
    {
        [Required,StringLength(100)]
        public string Name { get; set; }
        [StringLength(255)]
        public string Description { get; set; }
        public int Position { get; set; }
    }
}
