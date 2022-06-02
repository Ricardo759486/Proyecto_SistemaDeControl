package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Cuadrilla;
import com.cursojava.curso.model.Rol;
import com.cursojava.curso.model.TipoDocumento;
import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.service.CuadrillaServiceAPI;
import com.cursojava.curso.service.RolServiceAPI;
import com.cursojava.curso.service.TipoDocumentoServiceAPI;
import com.cursojava.curso.service.UsuarioServiceAPI;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping(value = "/getAll")
    public List<Usuario> getAll(){
        return usuarioServiceAPI.getAll();
    }

    @PostMapping(value = "/saveUsuario/{idIdentificacion}/{idCuadrilla}/{idRol}")
    public ResponseEntity<Usuario> save(@RequestBody Usuario usuario,
                                        @PathVariable(value = "idIdentificacion") int idIdentificacion,
                                        @PathVariable(value = "idCuadrilla") int idCuadrilla,
                                        @PathVariable(value = "idRol") int idRol){

        TipoDocumento identificacion = tipoDocumentoServiceAPI.get(idIdentificacion);
        Cuadrilla cuadrilla = cuadrillaServiceAPI.get(idCuadrilla);
        Rol rol = rolServiceAPI.get(idRol);
        usuario.setTipoDocumento(identificacion);
        usuario.setCuadrilla(cuadrilla);
        usuario.setRol(rol);
        usuario.setClave(hashearContra(usuario.getClave()));
        Usuario objeto = usuarioServiceAPI.save(usuario);

        return new ResponseEntity<Usuario>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateUsuario/{id}")
    public ResponseEntity<Usuario> update(@RequestBody Usuario usuario, @PathVariable(value = "id") int id){

        Usuario objeto = usuarioServiceAPI.get(id);
        if (objeto != null){
            objeto.setRol(usuario.getRol());
            objeto.setLogin(usuario.getLogin());
            objeto.setClave(usuario.getClave());
            objeto.setDireccion(usuario.getDireccion());
            objeto.setIdentificacion(usuario.getIdentificacion());
            objeto.setTipoDocumento(usuario.getTipoDocumento());
            objeto.setCuadrilla(usuario.getCuadrilla());
            objeto.setEstado(usuario.getEstado());
            usuarioServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Usuario>(usuario, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Usuario>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/cambiarContrasenia")
    public ResponseEntity<Usuario> cambiarContra(Usuario u, String contra){
        u.setClave(hashearContra(contra));
        return new ResponseEntity<Usuario>(u, HttpStatus.OK);
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

    public String hashearContra(String contra){
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        return argon2.hash(1, 1024, 1, contra);
    }

}
