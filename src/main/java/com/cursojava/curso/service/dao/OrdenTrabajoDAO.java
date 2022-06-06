package com.cursojava.curso.service.dao;

import lombok.Getter;
import lombok.Setter;

public class OrdenTrabajoDAO {

    @Getter @Setter
    private int idOrdenTrabajo;

    @Getter @Setter
    private String descripcion;

    @Getter @Setter
    private String tipoServicio;

    @Getter @Setter
    private String cliente;

    @Getter @Setter
    private String cuadrilla;

    @Getter @Setter
    private String estado;

    public OrdenTrabajoDAO(int idOrdenTrabajo, String descripcion, String tipoServicio, String cliente, String cuadrilla, String estado) {
        this.idOrdenTrabajo = idOrdenTrabajo;
        this.descripcion = descripcion;
        this.tipoServicio = tipoServicio;
        this.cliente = cliente;
        this.cuadrilla = cuadrilla;
        this.estado = estado;
    }
}
