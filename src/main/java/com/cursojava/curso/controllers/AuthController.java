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
    // private AuditoriaDao auditoDao;

    @GetMapping(value = "/validar")
    public List<Usuario> getAll(){
        usuarioServiceAPI.buscarCorreo();
        return usuarioServiceAPI.getAll();
    }
}
