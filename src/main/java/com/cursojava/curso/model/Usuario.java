package com.cursojava.curso.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the usuario database table.
 *
 */
@Entity
@NamedQuery(name="Usuario.findAll", query="SELECT u FROM Usuario u")
@ToString @EqualsAndHashCode
public class Usuario implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Getter @Setter @Column(name="id_usuario")
	private int idUsuario;

	@Getter @Setter @Column(name = "clave")
	private String clave;

	@Getter @Setter @Column(name = "direccion")
	private String direccion;

	@Getter @Setter @Column(name = "estado")
	private String estado;

	@Temporal(TemporalType.DATE)
	@Getter @Setter @Column(name = "fecha_ultimaContra")
	private Date fecha_ultimaContra;

	@Getter @Setter @Column(name = "identificacion")
	private String identificacion;

	@Getter @Setter @Column(name = "intentos")
	private int intentos;

	@Getter @Setter @Column(name = "login")
	private String login;

	//bi-directional many-to-one association to Auditoria
	@OneToMany(mappedBy="usuario")
	@Getter @Setter
	private List<Auditoria> auditorias;

	//bi-directional many-to-one association to TelefonoUsuario
	@OneToMany(mappedBy="usuario")
	@Getter @Setter
	private List<TelefonoUsuario> telefonoUsuarios;

	//bi-directional many-to-one association to Cuadrilla
	@ManyToOne
	@Getter @Setter @JoinColumn(name="id_cuadrilla")
	private Cuadrilla cuadrilla;

	//bi-directional many-to-one association to Rol
	@ManyToOne
	@Getter @Setter @JoinColumn(name="id_rol")
	private Rol rol;

	//bi-directional many-to-one association to TipoDocumento
	@ManyToOne
	@Getter @Setter @JoinColumn(name="tipo_identificacion")
	private TipoDocumento tipoDocumento;

	public Usuario() {
	}

}