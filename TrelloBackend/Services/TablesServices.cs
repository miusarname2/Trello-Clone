using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrelloBackend.DataAccess;
using TrelloBackend.Model.DataModel;

namespace TrelloBackend.Services
{
    public class TablesServices : ITablesService
    {
        public async Task<Table> CreateTable(TrelloDbContext _context, Table table)
        {
            var UserToModify = await _context.Users.FindAsync(table.UserId);

            if (UserToModify != null)
            {
                UserToModify.Tables.Add(table);
                // Imprimir las tablas en la consola antes de guardar cambios
                Console.WriteLine("Lista de Tables antes de guardar cambios:");
                foreach (var tables in UserToModify.Tables)
                {
                    Console.WriteLine($"ID: {tables.Id}, Nombre: {tables.Name}");
                }
            }

            _context.Tables.Add(table);

            return table;
        }

        public async Task<Table> DeleteTable(TrelloDbContext _context, Table table)
        {
            _context.Tables.Remove(table);
            await _context.SaveChangesAsync();
            return table;
        }

        public async Task<Table> ObtainTable(TrelloDbContext _context, int id)
        {
            return await _context.Tables.FindAsync(id);
        }

        public async Task<ActionResult<IEnumerable<Table>>> ObtainTables(TrelloDbContext _context)
        {
            return await _context.Tables.Include(u => u.Columns).ToListAsync();
        }
    }
}
