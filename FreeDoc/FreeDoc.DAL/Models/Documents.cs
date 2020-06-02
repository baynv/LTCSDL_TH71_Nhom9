using System;
using System.Collections.Generic;

namespace FreeDoc.DAL.Models
{
    public partial class Documents
    {
        public int DocumentID { get; set; }
        public int Category { get; set; }
        public string Title { get; set; }
        public string Thumbnail { get; set; }
        public string Content { get; set; }
        public int? Downloads { get; set; }
    }
}
