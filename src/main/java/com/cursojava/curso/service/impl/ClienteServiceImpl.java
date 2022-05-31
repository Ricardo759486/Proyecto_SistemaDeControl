package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.model.Cliente;
import com.cursojava.curso.repository.ClienteRepository;
import com.cursojava.curso.service.ClienteServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class ClienteServiceImpl extends GenericServiceImpl<Cliente, Integer> implements ClienteServiceAPI {
    @Autowired
    private ClienteRepository clienteDaoAPI;

    @Override
    public CrudRepository<Cliente, Integer> getDao(){
        return clienteDaoAPI;
    }
}
