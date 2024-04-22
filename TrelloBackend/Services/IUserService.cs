using Microsoft.AspNetCore.Mvc;
using TrelloBackend.DataAccess;
using TrelloBackend.Model.DataModel;

namespace TrelloBackend.Services
{
    public interface IUserService
    {
        Task<ActionResult<IEnumerable<User>>> ObtainUsers(TrelloDbContext _context);
        Task<User> ObtainUser(TrelloDbContext _context, int id);
        Task<User> CreateUser(TrelloDbContext _context, User user);
        Task<User> DeleteUser(TrelloDbContext _context, User user);
    }
}
