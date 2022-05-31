package com.cursojava.curso.repository;

import com.cursojava.curso.model.TipoServicio;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoServicioRepository extends CrudRepository<TipoServicio, Integer> {
}
