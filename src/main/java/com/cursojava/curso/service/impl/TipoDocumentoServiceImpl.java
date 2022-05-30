package com.cursojava.curso.service.impl;

import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.model.TipoDocumento;
import com.cursojava.curso.repository.TipoDocumentoRepository;
import com.cursojava.curso.service.TipoDocumentoServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class TipoDocumentoServiceImpl extends GenericServiceImpl<TipoDocumento, Integer> implements TipoDocumentoServiceAPI {
    @Autowired
    private TipoDocumentoRepository tipoDocumentoDaoAPI;

    @Override
    public CrudRepository<TipoDocumento, Integer> getDao(){
        return tipoDocumentoDaoAPI;
    }
}
