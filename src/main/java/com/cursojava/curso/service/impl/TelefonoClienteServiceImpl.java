package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.model.TelefonoCliente;
import com.cursojava.curso.repository.TelefonoClienteRepository;
import com.cursojava.curso.service.TelefonoClienteServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class TelefonoClienteServiceImpl extends GenericServiceImpl<TelefonoCliente, Integer> implements TelefonoClienteServiceAPI {
    @Autowired
    private TelefonoClienteRepository telefonoClienteDaoAPI;

    @Override
    public CrudRepository<TelefonoCliente, Integer> getDao(){
        return telefonoClienteDaoAPI;
    }
}
