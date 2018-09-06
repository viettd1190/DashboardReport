using System.Web.Mvc;
using DashboardReport.WebApp.Models;

namespace DashboardReport.WebApp.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        public ActionResult Login()
        {
            return View(new LogOnModel());
        }

        [HttpPost]
        public ActionResult Login(LogOnModel model)
        {
            return View(model);
        }
    }
}
