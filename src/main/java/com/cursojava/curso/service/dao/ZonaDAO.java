package com.cursojava.curso.service.dao;

import lombok.Getter;
import lombok.Setter;

public class ZonaDAO {

    @Getter @Setter
    private int idZona;

    @Getter @Setter
    private String ciudad;

    @Getter @Setter
    private String localidad;

    @Getter @Setter
    private String coordenadas;

    @Getter @Setter
    private String estado;

    public ZonaDAO(int idZona, String ciudad, String localidad, String coordenadas, String estado) {
        this.idZona = idZona;
        this.ciudad = ciudad;
        this.localidad = localidad;
        this.coordenadas = coordenadas;
        this.estado = estado;
    }
}
