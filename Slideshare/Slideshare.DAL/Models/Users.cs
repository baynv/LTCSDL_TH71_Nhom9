using System;
using System.Collections.Generic;

namespace Slideshare.DAL.Models
{
    public partial class Users
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
