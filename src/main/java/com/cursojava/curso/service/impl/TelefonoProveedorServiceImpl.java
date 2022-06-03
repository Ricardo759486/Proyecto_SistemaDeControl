package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.repository.TelefonoProveedorRepository;
import com.cursojava.curso.service.TelefonoProveedorServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class TelefonoProveedorServiceImpl extends GenericServiceImpl<TelefonoProveedor, Integer> implements TelefonoProveedorServiceAPI {
    @Autowired
    private TelefonoProveedorRepository telefonoProveedorDaoAPI;

    @Override
    public CrudRepository<TelefonoProveedor, Integer> getDao(){
        return telefonoProveedorDaoAPI;
    }
}
