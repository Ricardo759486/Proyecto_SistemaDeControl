package com.cursojava.curso.service.dao;

import lombok.Getter;
import lombok.Setter;

public class ParametroDAO {

    @Getter @Setter
    private int idParametro;

    @Getter @Setter
    private String descripcion;

    @Getter @Setter
    private String tipo;

    @Getter @Setter
    private String valor;

    public ParametroDAO(int idParametro, String descripcion, String tipo, String valor) {
        this.idParametro = idParametro;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.valor = valor;
    }
}
