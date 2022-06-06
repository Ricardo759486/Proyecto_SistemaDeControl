package com.cursojava.curso.service.dao;

import lombok.Getter;
import lombok.Setter;

public class RolDAO {

    @Getter @Setter
    private Integer idRol;

    @Getter @Setter
    private String tipoRol;

    @Getter @Setter
    private String estado;

    public RolDAO(Integer idRol, String tipoRol, String estado) {
        this.idRol = idRol;
        this.tipoRol = tipoRol;
        this.estado = estado;
    }
}
