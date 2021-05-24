using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication5.Models;

namespace WebApplication5.Controllers
{
    public class GenreController : ApiController
    {

        public HttpResponseMessage Get()
        {
            string query = @"
                    select id_genre, genre
                    from dbo.Genre
                ";

            DataTable table = new DataTable();
            using(var con= new SqlConnection(ConfigurationManager.ConnectionStrings["Drama"].ConnectionString))
                using(var cmd= new SqlCommand(query,con))
                using(var da= new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public string Post(Genre gen)
        {
            try
            {
                string query = @"
                    insert into dbo.Genre values
                    ('" + gen.genre + @"')
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



        public string Put (Genre gen)
        {
            try
            {
                string query = @"
                    update dbo.Genre set genre=
                    '" + gen.genre + @"'
                    where id_genre=" + gen.id_genre + @"
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
                    delete from dbo.Genre
                    where id_genre=" + id + @"
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


    }
}
