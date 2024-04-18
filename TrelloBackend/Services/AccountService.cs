using Microsoft.EntityFrameworkCore;
using TrelloBackend.DataAccess;
using TrelloBackend.Model.DataModel;
using TrelloBackend.Model.InputDataModel;

namespace TrelloBackend.Services
{
    public class AccountService : IAccountService
    {
        public async Task<bool> LogIn(UserLogin userData, TrelloDbContext _context)
        {
            var UserFinded = await _context.Users.FirstOrDefaultAsync(u=>u.Email == userData.Email && u.Password == userData.Password);
            if (UserFinded != null)
            {
                return true;
            }
            return false;
        }

        public async Task<User> Register(TrelloDbContext _context, User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }
    }
}
