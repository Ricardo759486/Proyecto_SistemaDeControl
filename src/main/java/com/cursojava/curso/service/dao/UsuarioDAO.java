package com.cursojava.curso.service.dao;

import com.cursojava.curso.model.*;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

public class UsuarioDAO {

    @Getter @Setter
    private int idUsuario;

    @Getter @Setter
    private String direccion;

    @Getter @Setter
    private String estado;

    @Getter @Setter
    private String identificacion;

    @Getter @Setter
    private int intentos;

    @Getter @Setter
    private String login;

    @Getter @Setter
    private Date fecha_ultima_contra;

    @Getter @Setter
    private String idCuadrilla;

    @Getter @Setter
    private String nomRol;

    @Getter @Setter
    private String tipoDoc;

    public UsuarioDAO(int idUsuario, String direccion, String estado, String identificacion, int intentos, String login, Date fecha_ultima_contra, String idCuadrilla, String nomRol, String tipoDoc) {
        this.idUsuario = idUsuario;
        this.direccion = direccion;
        this.estado = estado;
        this.identificacion = identificacion;
        this.intentos = intentos;
        this.login = login;
        this.fecha_ultima_contra = fecha_ultima_contra;
        this.idCuadrilla = idCuadrilla;
        this.nomRol = nomRol;
        this.tipoDoc = tipoDoc;
    }
}
