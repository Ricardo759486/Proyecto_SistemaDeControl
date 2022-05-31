package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.model.Zona;
import com.cursojava.curso.repository.ZonaRepository;
import com.cursojava.curso.service.ZonaServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class ZonaServiceImpl extends GenericServiceImpl<Zona, Integer> implements ZonaServiceAPI {
    @Autowired
    private ZonaRepository zonaDaoAPI;

    @Override
    public CrudRepository<Zona, Integer> getDao(){
        return zonaDaoAPI;
    }
}
