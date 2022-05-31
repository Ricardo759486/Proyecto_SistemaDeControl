package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.model.Cuadrilla;
import com.cursojava.curso.repository.CuadrillaRepository;
import com.cursojava.curso.service.CuadrillaServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class CuadrillaServiceImpl extends GenericServiceImpl<Cuadrilla, Integer> implements CuadrillaServiceAPI {
    @Autowired
    private CuadrillaRepository cuadrillaDaoAPI;

    @Override
    public CrudRepository<Cuadrilla, Integer> getDao(){
        return cuadrillaDaoAPI;
    }
}
