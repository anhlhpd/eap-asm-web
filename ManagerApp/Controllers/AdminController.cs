using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ManagerApp.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult CreateAccount()
        {
            return View();
        }
        public IActionResult EditAccount()
        {
            return View();
        }

        public IActionResult ListAccount()
        {
            return View();
        }
    }
}