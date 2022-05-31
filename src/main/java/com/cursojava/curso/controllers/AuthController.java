package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.service.AuditoriaServiceAPI;
import com.cursojava.curso.service.UsuarioServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AuthController {

    @Autowired
    private UsuarioServiceAPI usuarioServiceAPI;
    private AuditoriaServiceAPI auditoAPI;

    @GetMapping(value = "/validarLogin")

    public ResponseEntity<Usuario> login(String correo, String clave){
       Usuario usComprob =  usuarioServiceAPI.login(correo, clave);
       if(usComprob != null){
           if(auditoAPI.revisionFecha(usComprob)){
               return new ResponseEntity<Usuario>(usComprob, HttpStatus.OK);
               //"Sesión iniciada con exito"
           }
           return new ResponseEntity<Usuario>(usComprob, HttpStatus.INTERNAL_SERVER_ERROR);
           //"La contrasenia debe ser cambiada"
       }
        return new ResponseEntity<Usuario>(usComprob, HttpStatus.INTERNAL_SERVER_ERROR);
       //"Login fallido"
    }


}
