using System;
using System.Collections.Generic;

namespace Slideshare.DAL.Models
{
    public partial class UploadInfo
    {
        public int UploadID { get; set; }
        public string Author { get; set; }
        public string UploadTime { get; set; }
        public int Documents { get; set; }
        public int? Active { get; set; }
    }
}
