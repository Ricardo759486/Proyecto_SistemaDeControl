package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.model.Rol;
import com.cursojava.curso.repository.RolRepository;
import com.cursojava.curso.service.RolServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class RolServiceImpl extends GenericServiceImpl<Rol, Integer> implements RolServiceAPI {
    @Autowired
    private RolRepository rolDaoAPI;

    @Override
    public CrudRepository<Rol, Integer> getDao(){
        return rolDaoAPI;
    }
}
