using System;
using System.Collections.Generic;

namespace FreeDoc.DAL.Models
{
    public partial class SubCategories
    {
        public int Id { get; set; }
        public int ParentId { get; set; }
        public string Name { get; set; }
    }
}
