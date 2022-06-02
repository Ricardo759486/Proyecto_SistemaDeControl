package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.service.AuditoriaServiceAPI;
import com.cursojava.curso.service.UsuarioServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AuthController {

    @Autowired
    private UsuarioServiceAPI usuarioServiceAPI;

    @PutMapping(value = "/validarLogin/{correo}/{clave}")
    public ResponseEntity<Usuario> login(@PathVariable(value = "correo") String correo,
                                         @PathVariable(value = "clave") String clave){
       Usuario usComprob =  usuarioServiceAPI.login(correo, clave);
       int val = comprobacion(usComprob);
        switch(val) {
            case 0:
                System.out.println("Usuario bloqueado");
                return new ResponseEntity<Usuario>(usComprob, HttpStatus.INTERNAL_SERVER_ERROR);
            case 1:
                System.out.println("Sesion iniciada con exito");
                return new ResponseEntity<Usuario>(usComprob, HttpStatus.OK);
            case 2:
                System.out.println("La contrasenia debe ser cambiada");
                return new ResponseEntity<Usuario>(usComprob, HttpStatus.INTERNAL_SERVER_ERROR);
            case 3:
                System.out.println("Login fallido");
                return new ResponseEntity<Usuario>(usComprob, HttpStatus.INTERNAL_SERVER_ERROR);
            default:
                System.out.println("Se peto");
                return new ResponseEntity<Usuario>(usComprob, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    public int comprobacion(Usuario u){
        int resultado = -1;
        if(u != null){
            if(usuarioServiceAPI.validarEstado(u)){
                return 0;
                // "Estado inactivo"
            }
            if(usuarioServiceAPI.revisionFecha(u)){
                return 1;
                //"Sesión iniciada con exito"
            }
            return 2;
            //"La contrasenia debe ser cambiada"
        }else{
            return 3;
            //"Login fallido"
        }
    }
}
