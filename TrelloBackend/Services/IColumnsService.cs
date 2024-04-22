using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using TrelloBackend.DataAccess;
using TrelloBackend.Model.DataModel;

namespace TrelloBackend.Services
{
    public interface IColumnsService
    {
        Task<ActionResult<IEnumerable<Column>>> ObtainColumns(TrelloDbContext _context);
        Task<Column> ObtainColumn (TrelloDbContext _context,int id);
        Task<Column> CreateColumn (TrelloDbContext _context,Column column);
        Task<Column> DeleteColumn (TrelloDbContext _context, Column column);

    }
}
