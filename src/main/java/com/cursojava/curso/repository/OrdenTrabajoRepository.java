package com.cursojava.curso.repository;

import com.cursojava.curso.model.OrdenTrabajo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdenTrabajoRepository extends CrudRepository<OrdenTrabajo, Integer> {
}
