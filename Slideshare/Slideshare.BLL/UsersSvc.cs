using System;
using System.Collections.Generic;
using System.Text;

using Slideshare.Common.Rsp;
using Slideshare.Common.Req;
using Slideshare.Common.BLL;

namespace Slideshare.BLL
{
    using DAL;
    using DAL.Models;

    public class UsersSvc : GenericSvc<UsersRep, Users>
    {
        public override SingleRsp Read(String id)
        {
            var res = new SingleRsp();

            res.Data = _rep.Read(id);

            return res;
        }

        public override SingleRsp Update(Users m)
        {
            var res = new SingleRsp();

            var m1 = (m.UserID.Length > 0) ? _rep.Read(m.UserID) : _rep.Read(m.Fullname);

            if (m1 == null)
            {
                res.SetError("EZ103", "No data.");
            }
            else
            {
                res = base.Update(m);
                res.Data = m;
            }

            return res;
        }

        public override SingleRsp Delete(string code)
        {
            return base.Delete(code);
        }

        public SingleRsp CreateUser(UsersReq u)
        {
            var res = new SingleRsp();
            Users user = new Users();

            user.UserID = u.UserID;
            user.Fullname = u.Fullname;
            user.Picture = u.Picture;
            user.Email = u.Email;
            user.PhoneNumber = u.PhoneNumber;
            user.Password = u.Password;
            user.Role = u.Role;

            res = _rep.CreateUser(user);
            return res;
        }

        public SingleRsp UpdateUser(UsersReq u)
        {
            var res = new SingleRsp();
            Users user = new Users();

            user.UserID = u.UserID;
            user.Fullname = u.Fullname;
            user.Picture = u.Picture;
            user.Email = u.Email;
            user.PhoneNumber = u.PhoneNumber;
            user.Password = u.Password;
            user.Role = u.Role;

            res = _rep.UpdateUser(user);
            return res;
        }

    }
}
