using System.ComponentModel.DataAnnotations;

namespace TrelloBackend.Model.DataModel
{
    public class Task : BaseEntity
    {
        [Required,StringLength(75)]
        public string Name { get; set; }
        [StringLength(255)]
        public string Description { get; set; }
        public int ColumnId { get; set; }

    }
}
