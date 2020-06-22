using System;
using System.Collections.Generic;

namespace Slideshare.DAL.Models
{
    public partial class Categories
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }

        public string Link { get; set; }
    }
}
