package com.cursojava.curso.repository;

import com.cursojava.curso.model.Zona;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ZonaRepository extends CrudRepository<Zona, Integer> {
}
