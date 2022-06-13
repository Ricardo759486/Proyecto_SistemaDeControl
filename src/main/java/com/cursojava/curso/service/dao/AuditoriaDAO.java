package com.cursojava.curso.service.dao;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class AuditoriaDAO {

    @Getter @Setter
    private int idInforme;

    @Getter @Setter
    private String fechaHora;

    @Getter @Setter
    private String ipUsuario;

    @Getter @Setter
    private String operacionCrud;

    @Getter @Setter
    private String tabla;

    @Getter @Setter
    private String usuario;

    public AuditoriaDAO(int idInforme, String fechaHora, String ipUsuario, String operacionCrud, String tabla, String usuario) {
        this.idInforme = idInforme;
        this.fechaHora = fechaHora;
        this.ipUsuario = ipUsuario;
        this.operacionCrud = operacionCrud;
        this.tabla = tabla;
        this.usuario = usuario;
    }
}
