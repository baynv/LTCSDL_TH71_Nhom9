using System;
using System.Collections.Generic;

namespace Slideshare.DAL.Models
{
    public partial class DownloadInfo
    {
        public int DownloadID { get; set; }
        public string Users { get; set; }
        public string DownloadTime { get; set; }
        public int? Documents { get; set; }
    }
}
