package com.cursojava.curso.service.dao;

import lombok.Getter;
import lombok.Setter;


public class ClienteDAO {

    @Getter @Setter
    private int idCliente;

    @Getter @Setter
    private String direccion;

    @Getter @Setter
    private String tipoDocumento;

    @Getter @Setter
    private String numDocumento;

    @Getter @Setter
    private String estado;

    public ClienteDAO(int idCliente, String direccion, String tipoDocumento, String numDocumento, String estado) {
        this.idCliente = idCliente;
        this.direccion = direccion;
        this.tipoDocumento = tipoDocumento;
        this.numDocumento = numDocumento;
        this.estado = estado;
    }
}
