package com.cursojava.curso.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParametroRepository extends CrudRepository<Parametro, Integer> {
}
