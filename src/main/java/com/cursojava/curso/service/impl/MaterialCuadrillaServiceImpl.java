package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.model.MaterialCuadrilla;
import com.cursojava.curso.repository.MaterialCuadrillaRepository;
import com.cursojava.curso.service.MaterialCuadrillaServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class MaterialCuadrillaServiceImpl extends GenericServiceImpl<MaterialCuadrilla, Integer> implements MaterialCuadrillaServiceAPI {
    @Autowired
    private MaterialCuadrillaRepository materialCuadrillaDaoAPI;

    @Override
    public CrudRepository<MaterialCuadrilla, Integer> getDao(){
        return materialCuadrillaDaoAPI;
    }
}
