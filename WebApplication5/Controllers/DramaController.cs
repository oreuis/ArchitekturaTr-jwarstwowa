using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using WebApplication5.Models;



namespace WebApplication5.Controllers
{
    public class DramaController : ApiController
    {



        public HttpResponseMessage Get()
        {
            string query = @"
                    select id_drama, title, episodes, country, genre, convert(varchar(10),premiere,120) as premiere, Poster
                    from dbo.Drama
                ";

            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Drama"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public string Post(Drama dr)
        {
            try
            {
                string query = @"
                    insert into dbo.Drama values
                    (
                        '" + dr.title + @"',
                        '" + dr.episodes + @"',
                        '" + dr.country + @"',
                        '" + dr.genre + @"',
                        '" + dr.premiere + @"',
                        '" + dr.Poster + @"'
                    )
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["Drama"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Pomyślnie dodano.";
            }
            catch (Exception)
            {

                return "Wystąpił problem z dodaniem!";
            }
        }



        public string Put(Drama dr)
        {
            try
            {
                string query = @"
                    update dbo.Drama set 
                    title='" + dr.title + @"',
                    episodes='" + dr.episodes + @"',
                    country='" + dr.country + @"',
                    genre='" + dr.genre + @"',
                    premiere='" + dr.premiere + @"',
                    Poster='" + dr.Poster + @"'
                    where id_drama=" + dr.id_drama + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["Drama"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Pomyślnie zmieniono.";
            }
            catch (Exception)
            {

                return "Wystąpił problem ze zmianą!";
            }
        }




        public string Delete(int id)
        {
            try
            {
                string query = @"
                    delete from dbo.Drama
                    where id_drama=" + id + @"
                    ";


                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Drama"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Pomyślnie usunięto.";
            }
            catch (Exception)
            {
                return "Wystąpił błąd z usuwaniem!";
            }


        }

        [Route("api/Drama/AllGenres")]
        [HttpGet]

        public HttpResponseMessage AllGenres()
        {
            string query = @"
                    select genre from dbo.Genre ";


            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Drama"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        [Route("api/Drama/SaveFile")]

        public string SaveFile()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = HttpContext.Current.Server.MapPath("~/PosterPhotos/" + filename);

                postedFile.SaveAs(physicalPath);

                return filename;
            }
            catch (Exception)
            {
                return "poster.png";
            }
        }

    }
}
