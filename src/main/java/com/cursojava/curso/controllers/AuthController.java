package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.service.UsuarioServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuthController {

    @Autowired
    private UsuarioServiceAPI usuarioServiceAPI;
    // private AuditoriaServiceAPI auditoAPI;

    @GetMapping(value = "/validarLogin")
    public String login(String correo, String clave){
       Usuario usComprob =  usuarioServiceAPI.login(correo, clave);
       if(usComprob != null){
           // auditoAPI.verificartiempo;
          if(usuarioServiceAPI.validarEstado(usComprob)){

          }
           return "Sesión iniciada con exito";
       }
       return "Login fallido";
    }
    /**
     * public void verificarTiempo(Usuario u){
     *
     * }
     */
}
