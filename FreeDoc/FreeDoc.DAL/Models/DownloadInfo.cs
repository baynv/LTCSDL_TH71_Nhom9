using System;
using System.Collections.Generic;

namespace FreeDoc.DAL.Models
{
    public partial class DownloadInfo
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string DownlTime { get; set; }
        public int? DocId { get; set; }
    }
}
