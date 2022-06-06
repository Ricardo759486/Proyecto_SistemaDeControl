package com.cursojava.curso.service.dao;

import lombok.Getter;
import lombok.Setter;


public class MaterialDAO {

    @Getter @Setter
    private int idInventario;

    @Getter @Setter
    private String nombreMaterial;

    @Getter @Setter
    private int cantidad;

    @Getter @Setter
    private int costo;

    @Getter @Setter
    private String estado;

    public MaterialDAO(int idInventario, String nombreMaterial, int cantidad, int costo, String estado) {
        this.idInventario = idInventario;
        this.nombreMaterial = nombreMaterial;
        this.cantidad = cantidad;
        this.costo = costo;
        this.estado = estado;
    }
}
