using System;
using System.Collections.Generic;
using System.Text;
using Slideshare.Common.DAL;
using System.Linq;

namespace Slideshare.DAL
{
    using Microsoft.Data.SqlClient;
    using Microsoft.EntityFrameworkCore;
    using Models;
    using Slideshare.Common.Rsp;
    using System.Data;

    public class DocumentsRep : GenericRep<SlideShareContext, Documents>
    {
        #region -- Overrides --

        public override Documents Read(int id)
        {
            var res = All.FirstOrDefault(p => p.DocumentID == id);
            return res;
        }

        public int Remove(int id)
        {
            var m = base.All.First(i => i.DocumentID == id);
            m = base.Delete(m);
            return m.DocumentID;
        }

        #endregion
        public SingleRsp CreateDocuments(Documents document)
        {
            var res = new SingleRsp();

            using (var context = new SlideShareContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var t = context.Documents.Add(document);
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

        public SingleRsp UpdateDocument(Documents doc)
        {
            var res = new SingleRsp();

            using (var context = new SlideShareContext())
            {
                using (var tran = context.Database.BeginTransaction())
                {
                    try
                    {
                        var t = context.Documents.Update(doc);
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

        public List<object> getDocumentsByCategoryId(int cateId)
        {
            List<object> res = new List<object>();
            var cnn = (SqlConnection)Context.Database.GetDbConnection();
            if (cnn.State == ConnectionState.Closed)
            {
                cnn.Open();
            }
            try
            {
                SqlDataAdapter da = new SqlDataAdapter();
                DataSet ds = new DataSet();

                var cmd = cnn.CreateCommand();

                cmd.CommandText = "getDocumentsByCategoryId";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@cateId", cateId);

                da.SelectCommand = cmd;
                da.Fill(ds);

                if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        var x = new
                        {
                            documentID = row["DocumentID"],
                            author = row["Author"],
                            category = row["Category"],
                            title = row["Title"],
                            fileName = row["file_name"],
                            summary = row["summary"],
                            thumbnail = row["Thumbnail"],
                            downloads = row["Downloads"],
                            uploadTime = row["UploadTime"],
                            active = row["Active"]
                        };
                        res.Add(x);
                    }
                }
            }
            catch (Exception ex)
            {
                res = null;
            }

            return res;
        }

        public object SelectTopDownloads()
        {
            List<object> res = new List<object>();
            var cnn = (SqlConnection)Context.Database.GetDbConnection();
            if (cnn.State == ConnectionState.Closed)
            {
                cnn.Open();
            }
            try
            {
                SqlDataAdapter da = new SqlDataAdapter();
                DataSet ds = new DataSet();

                var cmd = cnn.CreateCommand();

                cmd.CommandText = "SelectTopDownloads";
                cmd.CommandType = CommandType.StoredProcedure;

                da.SelectCommand = cmd;
                da.Fill(ds);

                if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        var x = new
                        {
                            documentID = row["DocumentID"],
                            category = row["Category"],
                            title = row["Title"],
                            fileName = row["file_name"],
                            thumbnail = row["Thumbnail"],
                            downloads = row["Downloads"],
                            summary = row["summary"],
                            author = row["Author"],
                            uploadTime = row["UploadTime"]
                        };
                        res.Add(x);
                    }
                }
            }
            catch (Exception ex)
            {
                res = null;
            }

            return res;
        }

        public List<object> GetDocumentDetailById(int documentId)
        {
            List<object> res = new List<object>();
            var cnn = (SqlConnection)Context.Database.GetDbConnection();
            if (cnn.State == ConnectionState.Closed)
            {
                cnn.Open();
            }
            try
            {
                SqlDataAdapter da = new SqlDataAdapter();
                DataSet ds = new DataSet();

                var cmd = cnn.CreateCommand();

                cmd.CommandText = "GetDocumentById";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@documentId", documentId);


                da.SelectCommand = cmd;
                da.Fill(ds);

                Console.WriteLine(ds);

                /*if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        var x = new
                        {
                            documentID = row["DocumentID"],
                            category = row["Category"],
                            title = row["Title"],
                            fileName = row["file_name"],
                            thumbnail = row["Thumbnail"],
                            downloads = row["Downloads"],
                            summary = row["summary"],
                            author = row["Author"],
                            uploadTime = row["UploadTime"]
                        };
                        res.Add(x);
                    }
                }*/
            }
            catch (Exception ex)
            {
                res = null;
            }

            return res;
        }
        
        public List<object> SelectTopDocumentsByCategoryId(int categoryId)
        {
            List<object> res = new List<object>();
            var cnn = (SqlConnection)Context.Database.GetDbConnection();
            if (cnn.State == ConnectionState.Closed)
            {
                cnn.Open();
            }
            try
            {
                SqlDataAdapter da = new SqlDataAdapter();
                DataSet ds = new DataSet();

                var cmd = cnn.CreateCommand();

                cmd.CommandText = "SelectTopDocumentsByCategoryId";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@categoryId", categoryId);

                da.SelectCommand = cmd;
                da.Fill(ds);

                if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        var x = new
                        {
                            documentID = row["DocumentID"],
                            category = row["Category"],
                            title = row["Title"],
                            fileName = row["file_name"],
                            thumbnail = row["Thumbnail"],
                            downloads = row["Downloads"],
                            summary = row["summary"],
                            author = row["Author"],
                            uploadTime = row["UploadTime"]
                        };
                        res.Add(x);
                    }
                }
            }
            catch (Exception ex)
            {
                res = null;
            }

            return res;
        }

    }
}
