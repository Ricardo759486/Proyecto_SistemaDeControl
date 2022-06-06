package com.cursojava.curso.service.dao;

import lombok.Getter;
import lombok.Setter;

public class TipoServicioDAO {

    @Getter @Setter
    private int idServicio;

    @Getter @Setter
    private String descripcion;

    @Getter @Setter
    private String estado;

    public TipoServicioDAO(int idServicio, String descripcion, String estado) {
        this.idServicio = idServicio;
        this.descripcion = descripcion;
        this.estado = estado;
    }
}
