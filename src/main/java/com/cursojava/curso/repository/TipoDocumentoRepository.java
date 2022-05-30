package com.cursojava.curso.repository;

import com.cursojava.curso.model.TipoDocumento;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoDocumentoRepository extends CrudRepository<TipoDocumento, Long> {
}
