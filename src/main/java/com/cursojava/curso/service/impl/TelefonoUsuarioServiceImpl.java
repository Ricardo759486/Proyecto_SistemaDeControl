package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.repository.TelefonoUsuarioRepository;
import com.cursojava.curso.service.TelefonoUsuarioServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class TelefonoUsuarioServiceImpl extends GenericServiceImpl<TelefonoUsuario, Integer> implements TelefonoUsuarioServiceAPI {
    @Autowired
    private TelefonoUsuarioRepository telefonoUsuarioDaoAPI;

    @Override
    public CrudRepository<TelefonoUsuario, Integer> getDao(){
        return telefonoUsuarioDaoAPI;
    }
}
