using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrelloBackend.DataAccess;
using TrelloBackend.Model.DataModel;

namespace TrelloBackend.Services
{
    public class UserService : IUserService
    {
        public async Task<User> CreateUser(TrelloDbContext _context, User user)
        {
            _context.Users.Add(user);
            return user;
        }

        public async Task<User> DeleteUser(TrelloDbContext _context, User user)
        {
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<User> ObtainUser(TrelloDbContext _context, int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<ActionResult<IEnumerable<User>>> ObtainUsers(TrelloDbContext _context)
        {
            return await _context.Users.Include(u => u.Tables).ToListAsync();
        }
    }
}
