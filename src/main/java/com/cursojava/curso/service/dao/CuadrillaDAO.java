package com.cursojava.curso.service.dao;

import lombok.Getter;
import lombok.Setter;

public class CuadrillaDAO {

    @Getter @Setter
    private int idCuadrilla;

    @Getter @Setter
    private String movilAsociado;

    @Getter @Setter
    private String proveedor;

    @Getter @Setter
    private String turnoTrabajo;

    @Getter @Setter
    private String zona;

    @Getter @Setter
    private String estado;

    public CuadrillaDAO(int idCuadrilla, String movilAsociado, String proveedor, String turnoTrabajo, String zona, String estado) {
        this.idCuadrilla = idCuadrilla;
        this.movilAsociado = movilAsociado;
        this.proveedor = proveedor;
        this.turnoTrabajo = turnoTrabajo;
        this.zona = zona;
        this.estado = estado;
    }
}
