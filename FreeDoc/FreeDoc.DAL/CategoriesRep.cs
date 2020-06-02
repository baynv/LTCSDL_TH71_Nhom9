using System;
using System.Collections.Generic;
using System.Text;
using LTCSDL.Common.DAL;
using System.Linq;


namespace FreeDoc.DAL
{
    using FreeDoc.DAL.Models;

    public class CategoriesRep : GenericRep<FreeDocContext, Categories>
    {
        #region -- Overrides --
        public override Categories Read(int id)
        {
            var res = All.FirstOrDefault(p => p.CategoryID == id);
            return res;
        }

        public int Remove(int id)
        {
            var m = All.First(i => i.CategoryID == id);
            m = Delete(m);
            return m.CategoryID;
        }
        #endregion
    }
}
