using TrelloBackend.DataAccess;
using TrelloBackend.Model.DataModel;
using TrelloBackend.Model.InputDataModel;

namespace TrelloBackend.Services
{
    public interface IAccountService
    {
        Task<bool> LogIn(UserLogin userData,TrelloDbContext _context);
        Task<User> Register(TrelloDbContext _context,User user);
    }
}
