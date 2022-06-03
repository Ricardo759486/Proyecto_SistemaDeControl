package com.cursojava.curso.repository;

import com.cursojava.curso.model.TurnoTrabajo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TurnoTrabajoRepository extends CrudRepository<TurnoTrabajo, Integer> {
}
