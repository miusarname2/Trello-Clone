using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrelloBackend.DataAccess;
using TrelloBackend.Model.DataModel;

namespace TrelloBackend.Services
{
    public class ColumnsService : IColumnsService
    {
        public async Task<Column> CreateColumn(TrelloDbContext _context, Column column)
        {
            var tableToModify = await _context.Tables.FindAsync(column.TableId);
            if (tableToModify != null)
            {
                tableToModify.Columns.Add(column);
            }
            _context.Columns.Add(column);
            return column;
        }

        public async Task<Column> DeleteColumn(TrelloDbContext _context, Column column)
        {
            _context.Columns.Remove(column);
            await _context.SaveChangesAsync();

            return column;
        }

        public async Task<Column> ObtainColumn(TrelloDbContext _context, int id)
        {
            return await _context.Columns.FindAsync(id);
        }

        public async Task<ActionResult<IEnumerable<Column>>> ObtainColumns(TrelloDbContext _context)
        {
            return await _context.Columns.Include(u => u.Tasks).ToListAsync();
        }
    }
}
