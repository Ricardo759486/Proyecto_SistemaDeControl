package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.model.Parametro;
import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.repository.ParametroRepository;
import com.cursojava.curso.service.ParametroServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class ParametroServiceImpl extends GenericServiceImpl<Parametro, Integer> implements ParametroServiceAPI {
    @Autowired
    private ParametroRepository parametroDaoAPI;

    @Override
    public CrudRepository<Parametro, Integer> getDao(){
        return parametroDaoAPI;
    }

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public  int paraCantDias(){
        String tipo = "Validacion dias";
        String query = "FROM Parametro WHERE tipo = :tipo";
        List<Parametro> lista = entityManager.createQuery(query).setParameter("tipo", tipo).getResultList();
        return Integer.parseInt(lista.get(0).getValor());
    }

    @Override
    public int intentosPermitidos(){
        String tipo = "Validacion intentos";
        String query = "FROM Parametro WHERE tipo = :tipo";
        List<Parametro> lista = entityManager.createQuery(query).setParameter("tipo", tipo).getResultList();
        return Integer.parseInt(lista.get(0).getValor());
    }
}
