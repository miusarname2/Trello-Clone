using Microsoft.EntityFrameworkCore;

namespace TrelloBackend.DataAccess
{
    public class TrelloDbContext : DbContext
    {
        public TrelloDbContext(DbContextOptions<TrelloDbContext> options ):base(options) {
            
        }


    }
}
