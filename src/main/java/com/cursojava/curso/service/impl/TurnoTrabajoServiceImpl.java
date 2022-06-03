package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.model.TurnoTrabajo;
import com.cursojava.curso.repository.TurnoTrabajoRepository;
import com.cursojava.curso.service.TurnoTrabajoServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class TurnoTrabajoServiceImpl extends GenericServiceImpl<TurnoTrabajo, Integer> implements TurnoTrabajoServiceAPI {
    @Autowired
    private TurnoTrabajoRepository turnoTrabajoDaoAPI;

    @Override
    public CrudRepository<TurnoTrabajo, Integer> getDao(){
        return turnoTrabajoDaoAPI;
    }
}
