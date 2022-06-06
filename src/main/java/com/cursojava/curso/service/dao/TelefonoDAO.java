package com.cursojava.curso.service.dao;

import lombok.Getter;
import lombok.Setter;

public class TelefonoDAO {

    @Getter @Setter
    private int idTelefono;

    @Getter @Setter
    private String numTelefono;

    @Getter @Setter
    private String tipo;

    @Getter @Setter
    private String cliente;

    @Getter @Setter
    private String proveedor;

    @Getter @Setter
    private String usuario;

    public TelefonoDAO(int idTelefono, String numTelefono, String tipo, String cliente, String proveedor, String usuario) {
        this.idTelefono = idTelefono;
        this.numTelefono = numTelefono;
        this.tipo = tipo;
        this.cliente = cliente;
        this.proveedor = proveedor;
        this.usuario = usuario;
    }
}
