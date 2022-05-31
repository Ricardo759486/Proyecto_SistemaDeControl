package com.cursojava.curso.repository;

import com.cursojava.curso.model.Cuadrilla;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CuadrillaRepository extends CrudRepository<Cuadrilla, Integer> {
}
