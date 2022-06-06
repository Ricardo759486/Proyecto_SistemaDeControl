package com.cursojava.curso.service.dao;

import lombok.Getter;
import lombok.Setter;

public class TipoDocumentoDAO {

    @Getter @Setter
    private int idDocumento;

    @Getter @Setter
    private String descripcion;

    @Getter @Setter
    private String estado;

    public TipoDocumentoDAO(int idDocumento, String descripcion, String estado) {
        this.idDocumento = idDocumento;
        this.descripcion = descripcion;
        this.estado = estado;
    }
}
