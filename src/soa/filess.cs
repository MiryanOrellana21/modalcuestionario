    public JsonResult UploadFile(Archivo model, HttpPostedFileBase fileUpload)
        { 

 try
            {
                if ((fileUpload != null) && (model.Descripcion.Length != 0))
                {
                    if (fileUpload.ContentLength > 5242880)
                    {
                        return Json(new { Value = true, Message = "Archivo demasiado pesado, no puede pasar los 5MB" }, JsonRequestBehavior.AllowGet);
                    }
                    else if (!(fileUpload.FileName.EndsWith(".pdf") || fileUpload.FileName.EndsWith(".docx") || fileUpload.FileName.EndsWith(".doc")))
                    {
                        return Json(new { Value = true, Message = "No es un formato Valido" }, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        string path = Server.MapPath("~/Uploads/");
                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }
 
                        FileInfo info = new FileInfo(fileUpload.FileName);
                        
                        string ruta = path + Path.GetFileName(DateTime.Now.ToString("yyyyMMddHHmmssffff") + info.Extension);
 
                        fileUpload.SaveAs(ruta);
 
                        model.Nombre = Path.GetFileNameWithoutExtension(info.Name);
                        model.Ruta = ruta;
                        model.Extension = info.Extension;
 
                        string resultado = gestorArchivo.IngresarArchivo(model);
                        
                        return Json(new { Success = true, Id = resultado, Message = "Guardo Exitosamente" });
                    }
                }
                else
                {
                    return Json(new { Value = true, Message = "Debes llenar todos los campos" }, JsonRequestBehavior.AllowGet);
                }
            }
            catch(Exception e)
            {
                StringReader strReader = new StringReader(new StackTrace().ToString());
                string nombre_clase_y_metodo = strReader.ReadLine();
                _errorControl.ImprimirLog(e.Message, nombre_clase_y_metodo);
                return Json(new { Value = false, Message = "Error" + e.Message}, JsonRequestBehavior.AllowGet);
            }



        }
     
    