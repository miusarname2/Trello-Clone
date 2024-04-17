using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using TrelloBackend.Model.DataModel;

namespace TrelloBackend.DataAccess
{
    public class TrelloDbContext : DbContext
    {
        public TrelloDbContext(DbContextOptions<TrelloDbContext> options ):base(options) {
            
        }

        public DbSet<Column> Columns { get; set; }
        public DbSet<Table> Tables { get; set; }
        public DbSet<Model.DataModel.Task> Tasks { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
