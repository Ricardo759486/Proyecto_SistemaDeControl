package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;

/**
 * The persistent class for the cliente database table.
 * 
 */
@Entity
@NamedQuery(name="Cliente.findAll", query="SELECT c FROM Cliente c")
public class Cliente implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Getter @Setter @Column(name="id_cliente")
	private int idCliente;

	@Getter @Setter @Column(name = "cedula")
	private String cedula;

	@Getter @Setter @Column(name = "direccion")
	private String direccion;

	@Getter @Setter @Column(name = "estado")
	private String estado;

	//bi-directional many-to-one association to TipoDocumento
	@ManyToOne
	@Getter @Setter @JoinColumn(name="tipo_identificacion")
	private TipoDocumento tipoDocumento;

	//bi-directional many-to-one association to OrdenTrabajo
	@Getter @Setter @OneToMany(mappedBy="cliente")
	private List<OrdenTrabajo> ordenTrabajos;

	//bi-directional many-to-one association to Telefono
	@Getter @Setter @OneToMany(mappedBy="cliente")
	private List<Telefono> telefonos;

	public Cliente() {
	}

	public OrdenTrabajo addOrdenTrabajo(OrdenTrabajo ordenTrabajo) {
		getOrdenTrabajos().add(ordenTrabajo);
		ordenTrabajo.setCliente(this);

		return ordenTrabajo;
	}

	public OrdenTrabajo removeOrdenTrabajo(OrdenTrabajo ordenTrabajo) {
		getOrdenTrabajos().remove(ordenTrabajo);
		ordenTrabajo.setCliente(null);

		return ordenTrabajo;
	}

	public Telefono addTelefono(Telefono telefono) {
		getTelefonos().add(telefono);
		telefono.setCliente(this);

		return telefono;
	}

	public Telefono removeTelefono(Telefono telefono) {
		getTelefonos().remove(telefono);
		telefono.setCliente(null);

		return telefono;
	}

}