using System;
using System.Collections.Generic;
using System.Text;
using Slideshare.Common.DAL;
using System.Linq;

namespace Slideshare.DAL
{
    using Models;
    public class CategoriesRep : GenericRep<SlideShareContext, Categories>
    {
        #region -- Overrides --

        public override Categories Read(int id)
        {
            var res = All.FirstOrDefault(p => p.CategoryID == id);
            return res;
        }

        public int Remove(int id)
        {
            var m = base.All.First(i => i.CategoryID == id);
            m = base.Delete(m);
            return m.CategoryID;
        }

        #endregion
    }
}
