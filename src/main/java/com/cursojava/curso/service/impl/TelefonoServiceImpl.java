package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.model.Telefono;
import com.cursojava.curso.repository.TelefonoRepository;
import com.cursojava.curso.service.TelefonoServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class TelefonoServiceImpl extends GenericServiceImpl<Telefono, Integer> implements TelefonoServiceAPI {
    @Autowired
    private TelefonoRepository telefonoDaoAPI;

    @Override
    public CrudRepository<Telefono, Integer> getDao(){
        return telefonoDaoAPI;
    }
}
