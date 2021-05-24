using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication5.Models
{
    public class Drama
    {
        public int id_drama { get; set; }
        public string title { get; set; }
        public int episodes { get; set; }
        public string country { get; set; }
        public string genre { get; set; }
        public string premiere {get; set;}
        public string Poster { get; set; }
    }
}