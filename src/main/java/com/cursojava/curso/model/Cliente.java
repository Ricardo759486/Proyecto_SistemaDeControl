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
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Getter @Setter @Column(name="id_cliente")
	private int idCliente;

	@Getter @Setter @Column(name = "cedula")
	private String cedula;

	@Getter @Setter @Column(name = "direccion")
	private String direccion;

	@Getter @Setter @Column(name = "estado")
	private String estado;

	@Getter @Setter @Column(name = "telefono")
	private String telefono;

	//bi-directional many-to-one association to TipoDocumento
	@ManyToOne
	@Getter @Setter @JoinColumn(name="tipo_identificacion")
	private TipoDocumento tipoDocumento;

	//bi-directional many-to-one association to OrdenTrabajo
	@Getter @Setter @OneToMany(mappedBy="cliente")
	private List<OrdenTrabajo> ordenTrabajos;

	//bi-directional many-to-one association to TelefonoCliente
	@Getter @Setter @OneToMany(mappedBy="cliente")
	private List<TelefonoCliente> telefonoClientes;

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

	public TelefonoCliente addTelefonoCliente(TelefonoCliente telefonoCliente) {
		getTelefonoClientes().add(telefonoCliente);
		telefonoCliente.setCliente(this);

		return telefonoCliente;
	}

	public TelefonoCliente removeTelefonoCliente(TelefonoCliente telefonoCliente) {
		getTelefonoClientes().remove(telefonoCliente);
		telefonoCliente.setCliente(null);

		return telefonoCliente;
	}

}