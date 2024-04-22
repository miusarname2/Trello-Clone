using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrelloBackend.DataAccess;

namespace TrelloBackend.Services
{
    public class TaskServices : ITaskService
    {
        public async Task<Model.DataModel.Task> CreateTask(TrelloDbContext _context, Model.DataModel.Task task)
        {
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            return task;
        }

        public async Task<Model.DataModel.Task> DeleteTask(TrelloDbContext _context, Model.DataModel.Task task)
        {
            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return task;
        }

        public async Task<Model.DataModel.Task> ObtainTask(TrelloDbContext _context, int id)
        {
           return await _context.Tasks.FindAsync(id);
        }

        public async Task<ActionResult<IEnumerable<Model.DataModel.Task>>> ObtainTasks(TrelloDbContext _context)
        {
            return await _context.Tasks.ToListAsync();
        }
    }
}
