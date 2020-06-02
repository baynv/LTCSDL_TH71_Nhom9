using System;
using System.Collections.Generic;

namespace FreeDoc.DAL.Models
{
    public partial class User
    {
        public string UserId { get; set; }
        public string Password { get; set; }
        public string Fullname { get; set; }
        public byte[] Picture { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int Role { get; set; }
    }
}
