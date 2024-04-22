using Microsoft.AspNetCore.Mvc;
using TrelloBackend.DataAccess;
using TrelloBackend.Model.DataModel;

namespace TrelloBackend.Services
{
    public interface ITablesService
    {
        Task<ActionResult<IEnumerable<Table>>> ObtainTables(TrelloDbContext _context);
        Task<Table> ObtainTable(TrelloDbContext _context, int id);
        Task<Table> CreateTable(TrelloDbContext _context, Table table);
        Task<Table> DeleteTable(TrelloDbContext _context, Table table);
    }
}
