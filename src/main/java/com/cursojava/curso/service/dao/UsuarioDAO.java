package com.cursojava.curso.service.dao;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

public class UsuarioDAO {

    @Getter @Setter
    private int idUsuario;

    @Getter @Setter
    private String login;

    @Getter @Setter
    private String tipoDoc;

    @Getter @Setter
    private String identificacion;

    @Temporal(TemporalType.DATE)
    @Getter @Setter
    private Date fecha_ultima_contra;

    @Getter @Setter
    private String direccion;

    @Getter @Setter
    private String nomRol;

    @Getter @Setter
    private String idCuadrilla;

    @Getter @Setter
    private int intentos;

    @Getter @Setter
    private String estado;

    public UsuarioDAO(int idUsuario, String login, String tipoDoc, String identificacion, Date fecha_ultima_contra, String direccion, String nomRol, String idCuadrilla, int intentos, String estado) {
        this.idUsuario = idUsuario;
        this.login = login;
        this.tipoDoc = tipoDoc;
        this.identificacion = identificacion;
        this.fecha_ultima_contra = fecha_ultima_contra;
        this.direccion = direccion;
        this.nomRol = nomRol;
        this.idCuadrilla = idCuadrilla;
        this.intentos = intentos;
        this.estado = estado;
    }
}
