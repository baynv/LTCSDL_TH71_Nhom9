using System;
using System.Collections.Generic;
using System.Text;
using Slideshare.Common.DAL;
using System.Linq;

namespace Slideshare.DAL
{
    using Models;
    using Slideshare.Common.Rsp;
    using System.Linq.Expressions;

    public class UsersRep : GenericRep<SlideShareContext, Users>
    {
        #region -- Overrides --

        public override Users Read(String id)
        {
            var res = All.FirstOrDefault(p => String.Equals(p.UserID, id));
            return res;
        }

        public String Remove(String id)
        {
            var m = base.All.First(i => String.Equals(i.UserID, id));
            m = base.Delete(m);
            return m.UserID;
        }

        #endregion

        public SingleRsp CreateUser(Users user)
        {
            var res = new SingleRsp();

            using (var context = new SlideShareContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try {
                        var t = context.Users.Add(user);
                        context.SaveChanges();
                        tran.Commit();
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        res.SetError(ex.StackTrace); 
                    }
                }
            }

            return res;
        }

        public SingleRsp UpdateUser(Users user)
        {
            var res = new SingleRsp();

            using (var context = new SlideShareContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var t = context.Users.Update(user);
                        context.SaveChanges();
                        tran.Commit();
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        res.SetError(ex.StackTrace);
                    }
                }
            }

            return res;
        }
    }
}
