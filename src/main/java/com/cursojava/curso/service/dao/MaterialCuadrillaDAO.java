package com.cursojava.curso.service.dao;

import lombok.Getter;
import lombok.Setter;

public class MaterialCuadrillaDAO {

    @Getter @Setter
    private int idRegistro;

    @Getter @Setter
    private String material;

    @Getter @Setter
    private int cantidad;

    @Getter @Setter
    private String cuadrilla;

    public MaterialCuadrillaDAO(int idRegistro, String material, int cantidad, String cuadrilla) {
        this.idRegistro = idRegistro;
        this.material = material;
        this.cantidad = cantidad;
        this.cuadrilla = cuadrilla;
    }
}
