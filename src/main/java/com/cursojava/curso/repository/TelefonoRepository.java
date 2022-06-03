package com.cursojava.curso.repository;

import com.cursojava.curso.model.Telefono;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TelefonoRepository extends CrudRepository<Telefono, Integer> {
}
