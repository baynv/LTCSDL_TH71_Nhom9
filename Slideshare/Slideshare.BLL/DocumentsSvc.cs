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
    public class DocumentsSvc : GenericSvc<DocumentsRep, Documents>
    {
        public override SingleRsp Read(int id)
        {
            var res = new SingleRsp();

            res.Data = _rep.Read(id);

            return res;
        }

        public override SingleRsp Update(Documents m)
        {
            var res = new SingleRsp();

            var m1 = m.DocumentID > 0 ? _rep.Read(m.DocumentID) : _rep.Read(m.Title);
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

        public SingleRsp CreateDocument(DocumentsReq document)
        {
            var res = new SingleRsp();
            Documents doc = new Documents();

            doc.DocumentID = document.DocumentID;
            doc.Category = document.Category;
            doc.Title = document.Title;
            doc.FileName = document.FileName;
            doc.Summary = document.Summary;
            doc.Thumbnail = document.Thumbnail;
            doc.Downloads = document.Downloads;

            res = _rep.CreateDocuments(doc);
            return res;
        }

        public SingleRsp UpdateDocument(DocumentsReq document)
        {
            var res = new SingleRsp();
            Documents doc = new Documents();

            doc.DocumentID = document.DocumentID;
            doc.Category = document.Category;
            doc.Title = document.Title;
            doc.FileName = document.FileName;
            doc.Summary = document.Summary;
            doc.Thumbnail = document.Thumbnail;
            doc.Downloads = document.Downloads;

            res = _rep.UpdateDocument(doc);
            return res;
        }

        public List<object> GetDocumentsByCategoryId(int cateId)
        {
            return _rep.getDocumentsByCategoryId(cateId);
        }

        public object SelectTopDownloads()
        {
            return _rep.SelectTopDownloads();
        }

        public List<object> GetDocumentDetailById(int documentId)
        {
            return _rep.GetDocumentDetailById(documentId);
        }
        
        public List<object> SelectTopDocumentsByCategoryId(int categoryId)
        {
            return _rep.SelectTopDocumentsByCategoryId(categoryId);
        }
    }
}
