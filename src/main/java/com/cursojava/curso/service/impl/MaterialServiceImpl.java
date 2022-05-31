package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.model.Material;
import com.cursojava.curso.repository.MaterialRepository;
import com.cursojava.curso.service.MaterialServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class MaterialServiceImpl extends GenericServiceImpl<Material, Integer> implements MaterialServiceAPI {
    @Autowired
    private MaterialRepository materialDaoAPI;

    @Override
    public CrudRepository<Material, Integer> getDao(){
        return materialDaoAPI;
    }
}
