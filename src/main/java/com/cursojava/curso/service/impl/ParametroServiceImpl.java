package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.model.Parametro;
import com.cursojava.curso.repository.ParametroRepository;
import com.cursojava.curso.service.ParametroServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class ParametroServiceImpl extends GenericServiceImpl<Parametro, Integer> implements ParametroServiceAPI {
    @Autowired
    private ParametroRepository parametroDaoAPI;

    @Override
    public CrudRepository<Parametro, Integer> getDao(){
        return parametroDaoAPI;
    }
}
