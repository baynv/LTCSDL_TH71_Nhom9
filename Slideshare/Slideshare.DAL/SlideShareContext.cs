using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Slideshare.DAL.Models
{
    public partial class SlideShareContext : DbContext
    {
        public SlideShareContext()
        {
        }

        public SlideShareContext(DbContextOptions<SlideShareContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Categories> Categories { get; set; }
        public virtual DbSet<Documents> Documents { get; set; }
        public virtual DbSet<DownloadInfo> DownloadInfo { get; set; }
        public virtual DbSet<UploadInfo> UploadInfo { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=.;Initial Catalog=slideshare;Persist Security Info=True;Trusted_Connection=True;Pooling=False;MultipleActiveResultSets=False;Encrypt=False;TrustServerCertificate=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Categories>(entity =>
            {
                entity.HasKey(e => e.CategoryID).HasName("PK_categories");

                entity.Property(e => e.CategoryID).HasColumnName("CategoryID");

                entity.Property(e => e.CategoryName)
                    .HasColumnName("CategoryName")
                    .HasMaxLength(150);

                entity.Property(e => e.Link)
                    .HasColumnName("Link")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Documents>(entity =>
            {
                entity.HasKey(e => e.DocumentID).HasName("PK_documents");

                entity.Property(e => e.DocumentID).HasColumnName("DocumentID");

                entity.Property(e => e.Category).HasColumnName("Category");

                entity.Property(e => e.Downloads).HasColumnName("Downloads");

                entity.Property(e => e.FileName)
                    .HasColumnName("file_name")
                    .HasMaxLength(150);

                entity.Property(e => e.Thumbnail)
                    .HasColumnName("Thumbnail")
                    .HasMaxLength(150);

                entity.Property(e => e.Title)
                    .HasColumnName("Title")
                    .HasMaxLength(150);
            });

            modelBuilder.Entity<DownloadInfo>(entity =>
            {
                entity.HasKey(e => e.DownloadID).HasName("PK_downloadInfo");

                entity.Property(e => e.DownloadID)
                    .HasColumnName("DownloadID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Documents).HasColumnName("Documents");

                entity.Property(e => e.DownloadTime)
                    .HasColumnName("DownloadTime")
                    .HasMaxLength(150);

                entity.Property(e => e.Users)
                    .HasColumnName("Users")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<UploadInfo>(entity =>
            {
                entity.HasKey(e => e.UploadID).HasName("PK_uploadInfo");

                entity.Property(e => e.UploadID).HasColumnName("UploadID");

                entity.Property(e => e.Active).HasColumnName("Active");

                entity.Property(e => e.Documents).HasColumnName("Documents");

                entity.Property(e => e.UploadTime)
                    .HasColumnName("UploadTime")
                    .HasMaxLength(150);

                entity.Property(e => e.Author)
                    .IsRequired()
                    .HasColumnName("Author")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserID)
                    .HasName("PK_users");

                entity.Property(e => e.UserID)
                    .HasColumnName("UserID")
                    .HasMaxLength(50);

                entity.Property(e => e.Email)
                    .HasColumnName("Email")
                    .HasMaxLength(50);

                entity.Property(e => e.Fullname)
                    .HasColumnName("Fullname")
                    .HasMaxLength(150);

                entity.Property(e => e.Password)
                    .HasColumnName("Password")
                    .HasMaxLength(150);

                entity.Property(e => e.PhoneNumber)
                    .HasColumnName("PhoneNumber")
                    .HasMaxLength(50);

                entity.Property(e => e.Picture)
                    .HasColumnName("Picture")
                    .HasMaxLength(150);

                entity.Property(e => e.Role).HasColumnName("Role");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
