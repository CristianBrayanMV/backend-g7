import { usuarioModel } from "../models/usuarios.js";
import { direccionRequestDTO } from "../dtos/direcciones.js";

export const crearDireccion = async (req, res) => {
  try {
    console.log(req.user);
    const data = direccionRequestDTO(req.body);
    req.user.direcciones.push(data);
    await req.user.save(); // sirve para guardar los cambios realizados de una instancia de cualquier collection de la bd

    return res.status(201).json({
      message: "Direccion agregada exitosamente",
      result: req.user.direcciones,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      result: null,
    });
  }
};

export const listarDirecciones = async (req, res) => {
  return res.json({
    message: null,
    result: req.user.direcciones,
  });
};


export const editarDireccion = async(req, res) =>{
  try {
    const data = direccionRequestDTO(req.body);
    const {id} = req.params;
    const direccion = req.user.direcciones.id(id)
    direccion.set(data);
    await req.user.save();

    return res.json({
      message: 'Dirección editada correctamente',
      result: direccion
    })
    
  } catch (error) {
    return res.status(400).json({
      message: 'No se pudo editar la dirección',
      result: error.message
    })
  }

}

export const eliminarDireccion = async(req, res) =>{
  try {
    
    const {id} = req.params;
    req.user.direcciones.id(id).remove();
    req.user.save();

    return res.json({
      message: 'Dirección eliminada correctamente',
      result: null
    })
    
  } catch (error) {
    return res.status(400).json({
      message: 'No se pudo eliminar la dirección',
      result: error.message
    })
  }

}