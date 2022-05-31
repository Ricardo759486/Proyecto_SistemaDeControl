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
    @Override
    public boolean revisionFecha(Usuario u){
        String query = "FROM Auditoria WHERE id_usuario = :id_usuario AND evento = :evento";
        List<Auditoria> lista = entityManager.createQuery(query).setParameter("id_usuario", u.getIdUsuario()).setParameter("evento", "RegistroUsuario").getResultList();
        Auditoria audo = lista.get(lista.size()-1);
        Date fecha_creacion = audo.getFechaHora();
        Date fecha_actual = calTiempoActual();

        long rest = fecha_actual.getTime() - fecha_creacion.getTime();
        TimeUnit time = TimeUnit.DAYS;
        long dias_dif = time.convert(rest, TimeUnit.MILLISECONDS);

        if(dias_dif <= 7){
            return true;
        }
        return false;
    }

    public Date calTiempoActual(){
        LocalDate myObj = LocalDate.now();
        ZoneId defaultZoneId = ZoneId.systemDefault();
        Date date = Date .from(myObj.atStartOfDay(defaultZoneId).toInstant());
        return date;
    }

}
