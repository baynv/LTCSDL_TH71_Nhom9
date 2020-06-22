using System;
using System.Collections.Generic;
using System.Text;

namespace Slideshare.Common.Req
{
    public class DocumentsReq
    {
        public int DocumentID { get; set; }
        public int Category { get; set; }
        public string Title { get; set; }
        public string FileName { get; set; }
        public string Summary { get; set; }
        public string Thumbnail { get; set; }
        public int? Downloads { get; set; }
    }
}
