package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.model.Auditoria;
import com.cursojava.curso.repository.AuditoriaRepository;
import com.cursojava.curso.service.AuditoriaServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class AuditoriaServiceImpl extends GenericServiceImpl<Auditoria, Integer> implements AuditoriaServiceAPI {
    @Autowired
    private AuditoriaRepository auditoriaDaoAPI;

    @Override
    public CrudRepository<Auditoria, Integer> getDao(){
        return auditoriaDaoAPI;
    }
}
