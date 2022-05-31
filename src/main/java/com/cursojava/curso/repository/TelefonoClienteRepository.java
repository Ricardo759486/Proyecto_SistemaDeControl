package com.cursojava.curso.repository;

import com.cursojava.curso.model.TelefonoCliente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TelefonoClienteRepository extends CrudRepository<TelefonoCliente, Integer> {
}
