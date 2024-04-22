using Microsoft.AspNetCore.Mvc;
using TrelloBackend.DataAccess;
using TrelloBackend.Model.DataModel;
using DataModel = TrelloBackend.Model.DataModel;

namespace TrelloBackend.Services
{
    public interface ITaskService
    {
        Task<ActionResult<IEnumerable<DataModel.Task>>> ObtainTasks(TrelloDbContext _context);
        Task<DataModel.Task> ObtainTask(TrelloDbContext _context, int id);
        Task<DataModel.Task> CreateTask(TrelloDbContext _context, DataModel.Task task);
        Task<DataModel.Task> DeleteTask(TrelloDbContext _context, DataModel.Task task);
    }
}
