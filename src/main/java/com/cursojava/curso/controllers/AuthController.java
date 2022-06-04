package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.service.AuditoriaServiceAPI;
import com.cursojava.curso.service.UsuarioServiceAPI;
import com.cursojava.curso.service.impl.EnvioCorreoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
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
    @Autowired
    private EnvioCorreoImpl correoService;

    @EventListener(ApplicationReadyEvent.class)
    public void envioCorreo() {
        //correoService.enviarCorreo("dfmejiar@unbosque.edu.co", "Prueba Envio", "Bienvenido a la empresa");
        System.out.println("----- Iniciado");
    }

    @PutMapping(value = "/validarLogin/{correo}/{clave}")
    public ResponseEntity<Usuario> login(@PathVariable(value = "correo") String correo,
                                         @PathVariable(value = "clave") String clave){
       Usuario usComprob =  usuarioServiceAPI.login(correo, clave);
       int val = comprobacion(usComprob);
        switch(val) {
            case 0:
                System.out.println("Usuario bloqueado");
                correoService.enviarCorreo(usComprob.getLogin(),"Usuario Bloqueado", "Su usuario ha sido bloqueado debido a varios intentos fallidos" +
                        "\nde inicio de sesion, contactece con un administrador para acceder\na su cuenta.\nCordialmente, Sistema de Gestion Administrativo ");
                return new ResponseEntity<Usuario>(usComprob, HttpStatus.INTERNAL_SERVER_ERROR);
            case 1:
                System.out.println("Sesion iniciada con exito");
                return new ResponseEntity<Usuario>(usComprob, HttpStatus.OK);
            case 2:
                System.out.println("La contrasenia debe ser cambiada");
                correoService.enviarCorreo(usComprob.getLogin(), "Solicitud nueva contraseña", "Debido a reglas propia de la empresa su contraseña debe\n" +
                        "ser cambiada para poder acceder a su usuario: Dirigase a xyz.com para cambiar la contraseña");
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
