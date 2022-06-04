package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the cuadrilla database table.
 * 
 */
@Entity
@NamedQuery(name="Cuadrilla.findAll", query="SELECT c FROM Cuadrilla c")
public class Cuadrilla implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Getter @Setter @Column(name="id_cuadrilla")
	private int idCuadrilla;

	@Getter @Setter @Column(name = "estado")
	private String estado;

	@Getter @Setter @Column(name="movil_asociado")
	private String movilAsociado;

	//bi-directional many-to-one association to Proveedor
	@ManyToOne
	@Getter @Setter @JoinColumn(name="id_prov")
	private Proveedor proveedor;


	//bi-directional many-to-one association to TurnoTrabajo
	@ManyToOne
	@Getter @Setter @JoinColumn(name="turno_trabajo")
	private TurnoTrabajo turnoTrabajoBean;

	//bi-directional many-to-one association to Zona
	@ManyToOne
	@Getter @Setter @JoinColumn(name="id_zona")
	private Zona zona;

	//bi-directional many-to-one association to MaterialCuadrilla
	@Getter @Setter @OneToMany(mappedBy="cuadrilla")
	private List<MaterialCuadrilla> materialCuadrillas;

	//bi-directional many-to-one association to OrdenTrabajo
	@Getter @Setter @OneToMany(mappedBy="cuadrilla")
	private List<OrdenTrabajo> ordenTrabajos;

	//bi-directional many-to-one association to Usuario
	@Getter @Setter @OneToMany(mappedBy="cuadrilla")
	private List<Usuario> usuarios;

	public Cuadrilla() {
	}

	public MaterialCuadrilla addMaterialCuadrilla(MaterialCuadrilla materialCuadrilla) {
		getMaterialCuadrillas().add(materialCuadrilla);
		materialCuadrilla.setCuadrilla(this);

		return materialCuadrilla;
	}

	public MaterialCuadrilla removeMaterialCuadrilla(MaterialCuadrilla materialCuadrilla) {
		getMaterialCuadrillas().remove(materialCuadrilla);
		materialCuadrilla.setCuadrilla(null);

		return materialCuadrilla;
	}

	public OrdenTrabajo addOrdenTrabajo(OrdenTrabajo ordenTrabajo) {
		getOrdenTrabajos().add(ordenTrabajo);
		ordenTrabajo.setCuadrilla(this);

		return ordenTrabajo;
	}

	public OrdenTrabajo removeOrdenTrabajo(OrdenTrabajo ordenTrabajo) {
		getOrdenTrabajos().remove(ordenTrabajo);
		ordenTrabajo.setCuadrilla(null);

		return ordenTrabajo;
	}

	public Usuario addUsuario(Usuario usuario) {
		getUsuarios().add(usuario);
		usuario.setCuadrilla(this);

		return usuario;
	}

	public Usuario removeUsuario(Usuario usuario) {
		getUsuarios().remove(usuario);
		usuario.setCuadrilla(null);

		return usuario;
	}

}