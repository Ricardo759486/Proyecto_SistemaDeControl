package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.model.TipoServicio;
import com.cursojava.curso.repository.TipoServicioRepository;
import com.cursojava.curso.service.TipoServicioServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class TipoServicioServiceImpl extends GenericServiceImpl<TipoServicio, Integer> implements TipoServicioServiceAPI {
    @Autowired
    private TipoServicioRepository tipoServicioDaoAPI;

    @Override
    public CrudRepository<TipoServicio, Integer> getDao(){
        return tipoServicioDaoAPI;
    }
}
