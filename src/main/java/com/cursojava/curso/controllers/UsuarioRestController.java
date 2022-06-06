package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Cuadrilla;
import com.cursojava.curso.model.Rol;
import com.cursojava.curso.model.TipoDocumento;
import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.service.CuadrillaServiceAPI;
import com.cursojava.curso.service.RolServiceAPI;
import com.cursojava.curso.service.TipoDocumentoServiceAPI;
import com.cursojava.curso.service.UsuarioServiceAPI;
import com.cursojava.curso.service.dao.UsuarioDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class UsuarioRestController {

    @Autowired
    private UsuarioServiceAPI usuarioServiceAPI;
    @Autowired
    private TipoDocumentoServiceAPI tipoDocumentoServiceAPI;
    @Autowired
    private CuadrillaServiceAPI cuadrillaServiceAPI;
    @Autowired
    private RolServiceAPI rolServiceAPI;

    @GetMapping(value = "/getAllUsuarios")
    public List<UsuarioDAO> getAll(){

        List<Usuario> getall = usuarioServiceAPI.getAll();
        List<UsuarioDAO> listaF = new ArrayList<>();

        for (Usuario u:getall){
            UsuarioDAO objeto = new UsuarioDAO(u.getIdUsuario(),u.getDireccion(),u.getEstado(),u.getIdentificacion(),u.getIntentos(),u.getLogin(),u.getFecha_ultima_contra(),u.getCuadrilla().getMovilAsociado(),u.getRol().getTipoRol(),u.getTipoDocumento().getDescripcion());
            listaF.add(objeto);
        }

        return listaF;
    }

    @PostMapping(value = "/saveUsuario/{idIdentificacion}/{idCuadrilla}/{idRol}")
    public String save(@RequestBody Usuario usuario,
                                        @PathVariable(value = "idIdentificacion") int idIdentificacion,
                                        @PathVariable(value = "idCuadrilla") int idCuadrilla,
                                        @PathVariable(value = "idRol") int idRol){

        TipoDocumento identificacion = tipoDocumentoServiceAPI.get(idIdentificacion);
        Cuadrilla cuadrilla = cuadrillaServiceAPI.get(idCuadrilla);
        Rol rol = rolServiceAPI.get(idRol);
        usuario.setTipoDocumento(identificacion);
        usuario.setCuadrilla(cuadrilla);
        usuario.setRol(rol);
        usuario.setFecha_ultima_contra(new Date());
        usuario.setClave(usuarioServiceAPI.hashearContra(usuario.getClave()));
        Usuario objeto = usuarioServiceAPI.save(usuario);

        return "Credenciales del usuario "+usuario.getLogin()+" ingresadas correctamente";
    }

    @PutMapping(value = "/updateUsuario/{id}/{idIdentificacion}/{idCuadrilla}/{idRol}")
    public ResponseEntity<Usuario> update(@RequestBody Usuario usuario,
                                          @PathVariable(value = "id") int id,
                                          @PathVariable(value = "idIdentificacion") int idIdentificacion,
                                          @PathVariable(value = "idCuadrilla") int idCuadrilla,
                                          @PathVariable(value = "idRol") int idRol){

        Usuario objeto = usuarioServiceAPI.get(id);
        TipoDocumento identificacion = tipoDocumentoServiceAPI.get(idIdentificacion);
        Cuadrilla cuadrilla = cuadrillaServiceAPI.get(idCuadrilla);
        Rol rol = rolServiceAPI.get(idRol);
        if (objeto != null){
            objeto.setRol(rol);
            objeto.setLogin(usuario.getLogin());
            objeto.setClave(usuarioServiceAPI.hashearContra(usuario.getClave()));
            objeto.setDireccion(usuario.getDireccion());
            objeto.setIdentificacion(usuario.getIdentificacion());
            objeto.setTipoDocumento(identificacion);
            objeto.setCuadrilla(cuadrilla);
            objeto.setIntentos(usuario.getIntentos());
            objeto.setFecha_ultima_contra(usuario.getFecha_ultima_contra());
            objeto.setEstado(usuario.getEstado());
            usuarioServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Usuario>(usuario, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Usuario>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/cambiarContrasenia/{id}/{contra}")
    public ResponseEntity<Usuario> cambiarContra(@RequestBody Usuario usuario,
                                                 @PathVariable(value = "contra") String contra){
        usuario.setClave(usuarioServiceAPI.hashearContra(contra));
        return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteUsuario/{id}")
    public ResponseEntity<Usuario> delete(@PathVariable int id){
        Usuario usuario = usuarioServiceAPI.get(id);
        if (usuario != null){
            usuarioServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Usuario>(usuario, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
    }


}
