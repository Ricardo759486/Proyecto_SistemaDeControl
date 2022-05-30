package com.cursojava.curso.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;

import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.repository.UsuarioRepository;
import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.service.UsuarioServiceAPI;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServiceImpl extends GenericServiceImpl<Usuario, Long> implements UsuarioServiceAPI {
    
    @Autowired
    private UsuarioRepository usuarioDaoAPI;

    @Override
    public CrudRepository<Usuario, Long> getDao(){
        return usuarioDaoAPI;
    }
    @Override
    public void buscarCorreo (){
        System.out.println("zsd");
    }
}
