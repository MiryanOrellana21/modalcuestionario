using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApi.Transfers;

namespace WebApi.Models
{
    public partial class curso
    {
        public static IEnumerable<cursodt> ListarCursosPublicos(int categoria_id)
        {
            soaEntities db = new soaEntities();
            var list = from b in db.cursos.Where(t => t.categoria_id == categoria_id).OrderBy(t => t.nombres)
                       select new cursodt()
                       {
                           id = b.id,
                           nombres = b.nombres,
                           creditos = b.creditos,
                           categoria_id = b.categoria_id,
                           catagoriadt = new categoriadt (){ 
                               id =b.categoria.id,
                               nombre = b.categoria.nombre,
                               orden = b.categoria.orden
                           }
                       };
            return list;
        }
        public static cursodt ObtenerCurso(int id)
        {
            soaEntities db = new soaEntities();
            var obj = db.cursos.Select(b =>
                            new cursodt()
                            {
                                id = b.id,
                                nombres = b.nombres,
                                categoria_id = b.categoria_id,
                                creditos = b.creditos
                            }).SingleOrDefault(b => b.id == id);
            if(obj == null) obj = new cursodt() {id = 0, nombres = ""};
            return obj;
        }
        public static cursodt InsertarCurso(cursodt cursodt)
        {
            soaEntities db = new soaEntities();
            curso curso = new curso(){
                nombres = cursodt.nombres,
                categoria_id = cursodt.categoria_id,
                creditos = cursodt.creditos
            };
            db.cursos.Add(curso);
            db.SaveChanges();
            return curso.ObtenerCurso(curso.id);
        }
        public static cursodt ActualizarCurso(int id, cursodt cursodt)
        {
            soaEntities db = new soaEntities();
            curso curso = db.cursos.Find(id);
            curso.nombres = cursodt.nombres;
            curso.creditos = cursodt.creditos;
            curso.categoria_id = cursodt.categoria_id;
            db.Entry(curso).State = EntityState.Modified;
            db.SaveChanges();
            return curso.ObtenerCurso(curso.id);
        }
        public static bool EliminarCurso(int id)
        {
            soaEntities db = new soaEntities();
            curso curso = db.cursos.Find(id);
            db.cursos.Remove(curso);
            db.SaveChanges();
            return true;
        }
    }
}