package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.model.Auditoria;
import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.repository.AuditoriaRepository;
import com.cursojava.curso.service.AuditoriaServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Service
public class AuditoriaServiceImpl extends GenericServiceImpl<Auditoria, Integer> implements AuditoriaServiceAPI {
    @Autowired
    private AuditoriaRepository auditoriaDaoAPI;

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public CrudRepository<Auditoria, Integer> getDao(){
        return auditoriaDaoAPI;
    }

}
