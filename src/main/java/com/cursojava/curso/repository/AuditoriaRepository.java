package com.cursojava.curso.repository;

import com.cursojava.curso.model.Auditoria;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuditoriaRepository extends CrudRepository<Auditoria, Integer> {
}
