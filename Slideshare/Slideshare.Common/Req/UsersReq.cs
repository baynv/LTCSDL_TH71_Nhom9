using System;
using System.Collections.Generic;
using System.Text;

namespace Slideshare.Common.Req
{
    public class UsersReq
    {
        public string UserID { get; set; }
        public string Fullname { get; set; }
        public string Picture { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Password { get; set; }
        public int? Role { get; set; }

    }
}
