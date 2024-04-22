using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrelloBackend.DataAccess;
using TrelloBackend.Model.DataModel;
using TrelloBackend.Services;
using DataModel = TrelloBackend.Model.DataModel;

namespace TrelloBackend.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly TrelloDbContext _context;
        private readonly ITaskService _taskService;

        public TasksController(TrelloDbContext context,ITaskService taskService)
        {
            _context = context;
            _taskService = taskService;
        }

        // GET: api/Tasks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DataModel.Task>>> GetTasks()
        {
            return await _taskService.ObtainTasks(_context);
        }

        // GET: api/Tasks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DataModel.Task>> GetTask(int id)
        {
            var task = await _taskService.ObtainTask(_context, id);

            if (task == null)
            {
                return NotFound();
            }

            return task;
        }

        // PUT: api/Tasks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTask(int id, DataModel.Task task)
        {
            if (id != task.Id)
            {
                return BadRequest();
            }

            _context.Entry(task).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Tasks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DataModel.Task>> PostTask(DataModel.Task task)
        {
            var userResp = await _taskService.CreateTask(_context,task);
            if (userResp != null)
            {
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetTask", new { id = task.Id }, task);
            }

            return StatusCode(501);
        }

        // DELETE: api/Tasks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
            {
                return NotFound();
            }

            task = await _taskService.DeleteTask(_context, task);

            if (task == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        private bool TaskExists(int id)
        {
            return _context.Tasks.Any(e => e.Id == id);
        }
    }
}
