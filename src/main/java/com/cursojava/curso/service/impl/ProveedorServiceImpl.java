package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.repository.ProveedorRepository;
import com.cursojava.curso.service.ProveedorServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class ProveedorServiceImpl extends GenericServiceImpl<Proveedor, Integer> implements ProveedorServiceAPI {
    @Autowired
    private ProveedorRepository proveedorDaoAPI;

    @Override
    public CrudRepository<Proveedor, Integer> getDao(){
        return proveedorDaoAPI;
    }
}
