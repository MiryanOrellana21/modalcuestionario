using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Transfers;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class PublicacionContenidosController : ApiController
    {
        //api/publicacioncontenidos/ListarCategoriasPublicas
        [HttpGet]
        [Route("api/publicacioncontenidos/ListarCategoriasPublicas")]
        public IEnumerable<categoriadt> ListarCategoriasPublicas()
        {
            return categoria.ListarCategoriasPublicas();
        }
        [HttpGet]
        [Route("api/publicacioncontenidos/ListarCursosPublicos")]
        public IEnumerable<cursodt> ListarCursosPublicos(int categoria_id)
        {
            return curso.ListarCursosPublicos(categoria_id);
        }
        //api/publicacioncontenidos/ListarCategoriasPublicas
        [HttpGet]
        [Route("api/publicacioncontenidos/EstablecerOrden")]
        public bool EstablecerOrden(int id, int orden)
        {
            categoria.EstablecerOrden(id, orden);
            return true;
        }
        //api/publicacioncontenidos/ObtenerCurso
        [HttpGet]
        [Route("api/publicacioncontenidos/ObtenerCurso")]
        public cursodt ObtenerCurso(int id)
        {
            return curso.ObtenerCurso(id);
        }
        //api/publicacioncontenidos/InsertarCurso
        [HttpPost]
        [Route("api/publicacioncontenidos/InsertarCurso")]
        public cursodt InsertarCurso(cursodt cursodt)
        {
            return curso.InsertarCurso(cursodt);
        }
        //api/publicacioncontenidos/ActualizarCurso
        [HttpPut]
        [Route("api/publicacioncontenidos/ActualizarCurso")]
        public cursodt ActualizarCurso(int id, cursodt cursodt)
        {
            return curso.ActualizarCurso(id, cursodt);
        }
        //api/publicacioncontenidos/EliminarCurso
        [HttpDelete]
        [Route("api/publicacioncontenidos/EliminarCurso")]
        public bool EliminarCurso(int id)
        {
            return curso.EliminarCurso(id);
        }
        
    }
}
