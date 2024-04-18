using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TrelloBackend.DataAccess;
using TrelloBackend.Model.DataModel;
using TrelloBackend.Model.InputDataModel;
using TrelloBackend.Services;

namespace TrelloBackend.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly TrelloDbContext _context;
        private readonly IAccountService _accountService;

        public AccountController(TrelloDbContext context, IAccountService accountService)
        {
            _context = context;
            _accountService = accountService;
        }

        // Post: api/Account/Login
        [Route("Login")]
        [HttpPost]
        public async Task<IActionResult> LoginUser([FromBody] UserLogin user)
        {
            bool Users = await _accountService.LogIn(user,_context);
            if (Users)
            {
                return NoContent();
            }

            return NotFound(); 
        }

        // Post: api/Account/Register
        [Route("Register")]
        [HttpPost]
        public async Task<IActionResult> RegisterUser (User user)
        {
            User userReturned = await _accountService.Register(_context, user);

            if (userReturned != null)
            {
                return CreatedAtAction("GetUser", new { id = user.Id }, user);
            }

            return StatusCode(406);

        }
    }
}
