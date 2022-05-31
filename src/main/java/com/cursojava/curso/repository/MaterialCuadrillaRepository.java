package com.cursojava.curso.repository;

import com.cursojava.curso.model.MaterialCuadrilla;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaterialCuadrillaRepository extends CrudRepository<MaterialCuadrilla, Integer> {
}
