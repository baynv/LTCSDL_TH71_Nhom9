using System;
using System.Collections.Generic;

namespace FreeDoc.DAL.Models
{
    public partial class UploadInfo
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string UplTime { get; set; }
        public int DocId { get; set; }
        public int? Active { get; set; }
    }
}
