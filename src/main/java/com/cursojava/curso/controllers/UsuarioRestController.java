package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.service.UsuarioServiceAPI;
import com.cursojava.curso.utils.JWTUtil;
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

    @GetMapping(value = "/getAll")
    public List<Usuario> getAll(){
        return usuarioServiceAPI.getAll();
    }

    @PostMapping(value = "/saveUsuario")
    public ResponseEntity<Usuario> save(@RequestBody Usuario usuario){
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(1, 1024, 1, usuario.getClave());
        usuario.setClave(hash);
        Usuario objeto = usuarioServiceAPI.save(usuario);

        return new ResponseEntity<Usuario>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteUsuario/{id}")
    public ResponseEntity<Usuario> delete(@PathVariable Long id){
        Usuario usuario = usuarioServiceAPI.get(id);
        if (usuario != null){
            usuarioServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Usuario>(usuario, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
    }

}
