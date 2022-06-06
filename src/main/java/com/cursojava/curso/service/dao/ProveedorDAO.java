package com.cursojava.curso.service.dao;

import lombok.Getter;
import lombok.Setter;

public class ProveedorDAO {

    @Getter @Setter
    private int idProveedor;

    @Getter @Setter
    private String nombre;

    @Getter @Setter
    private String nit;

    @Getter @Setter
    private String email;

    @Getter @Setter
    private String direccion;

    @Getter @Setter
    private String estado;

    public ProveedorDAO(int idProveedor, String nombre, String nit, String email, String direccion, String estado) {
        this.idProveedor = idProveedor;
        this.nombre = nombre;
        this.nit = nit;
        this.email = email;
        this.direccion = direccion;
        this.estado = estado;
    }
}
