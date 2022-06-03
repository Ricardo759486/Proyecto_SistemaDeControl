package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;

/**
 * The persistent class for the proveedor database table.
 * 
 */
@Entity
@NamedQuery(name="Proveedor.findAll", query="SELECT p FROM Proveedor p")
public class Proveedor implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Getter @Setter @Column(name="nit_proveedor")
	private int nitProveedor;

	@Getter @Setter @Column(name = "direccion")
	private String direccion;

	@Getter @Setter @Column(name = "email")
	private String email;

	@Getter @Setter @Column(name = "nombre")
	private String nombre;

	@Getter @Setter @Column(name = "estado")
	private String estado;

	//bi-directional many-to-one association to Cuadrilla
	@Getter @Setter @OneToMany(mappedBy="proveedor")
	private List<Cuadrilla> cuadrillas;

	//bi-directional many-to-one association to Telefono
	@Getter @Setter @OneToMany(mappedBy="proveedor")
	private List<Telefono> telefonos;

	public Proveedor() {
	}

	public Cuadrilla addCuadrilla(Cuadrilla cuadrilla) {
		getCuadrillas().add(cuadrilla);
		cuadrilla.setProveedor(this);

		return cuadrilla;
	}

	public Cuadrilla removeCuadrilla(Cuadrilla cuadrilla) {
		getCuadrillas().remove(cuadrilla);
		cuadrilla.setProveedor(null);

		return cuadrilla;
	}

	public Telefono addTelefono(Telefono telefono) {
		getTelefonos().add(telefono);
		telefono.setProveedor(this);

		return telefono;
	}

	public Telefono removeTelefono(Telefono telefono) {
		getTelefonos().remove(telefono);
		telefono.setProveedor(null);

		return telefono;
	}

}