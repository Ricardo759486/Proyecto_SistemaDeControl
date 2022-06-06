package com.cursojava.curso.service.dao;

import lombok.Getter;
import lombok.Setter;

public class TurnoTrabajoDAO {

    @Getter @Setter
    private int idTurno;

    @Getter @Setter
    private String descripcion;

    @Getter @Setter
    private String estado;

    public TurnoTrabajoDAO(int idTurno, String descripcion, String estado) {
        this.idTurno = idTurno;
        this.descripcion = descripcion;
        this.estado = estado;
    }
}
