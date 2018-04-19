using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("[controller]")]
    public class ConvertController : Controller
    {
        // GET api/convert/btc/0.29127
        [HttpGet("btc/{bitcoins}")]
        public double Get(double bitcoins)
        {
            double SomeCryptoMagicStuff() => (new Random()).NextDouble() * 3000 + 5000;

            return bitcoins * SomeCryptoMagicStuff();
        }
    }
}
