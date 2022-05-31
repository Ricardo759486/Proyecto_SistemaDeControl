package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.model.OrdenTrabajo;
import com.cursojava.curso.repository.OrdenTrabajoRepository;
import com.cursojava.curso.service.OrdenTrabajoServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class OrdenTrabajoServiceImpl extends GenericServiceImpl<OrdenTrabajo, Integer> implements OrdenTrabajoServiceAPI {
    @Autowired
    private OrdenTrabajoRepository ordenTrabajoDaoAPI;

    @Override
    public CrudRepository<OrdenTrabajo, Integer> getDao(){
        return ordenTrabajoDaoAPI;
    }
}
