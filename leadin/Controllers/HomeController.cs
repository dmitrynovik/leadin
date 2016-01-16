using System.Web.Mvc;

namespace leadin.Controllers
{
    public class HomeController : Controller
    {
        private const string Title = "LeadIn Group";

        public ActionResult Index()
        {
            ViewBag.Title = Title;
            return View();
        }

        public ActionResult Management()
        {
            ViewBag.Title = Title;
            return View();
        }

        public ActionResult ContactUs()
        {
            ViewBag.Title = Title;
            return View();
        }
    }
}
