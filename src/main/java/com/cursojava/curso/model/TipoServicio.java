package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the tipo_servicio database table.
 * 
 */
@Entity
@Table(name="tipo_servicio")
@NamedQuery(name="TipoServicio.findAll", query="SELECT t FROM TipoServicio t")
public class TipoServicio implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Getter @Setter @Column(name="id_servicio")
	private int idServicio;

	@Getter @Setter
	private String descripcion;

	@Getter @Setter
	private String estado;

	//bi-directional many-to-one association to OrdenTrabajo
	@Getter @Setter @OneToMany(mappedBy="tipoServicio")
	private List<OrdenTrabajo> ordenTrabajos;

	public TipoServicio() {
	}

	public OrdenTrabajo addOrdenTrabajo(OrdenTrabajo ordenTrabajo) {
		getOrdenTrabajos().add(ordenTrabajo);
		ordenTrabajo.setTipoServicio(this);

		return ordenTrabajo;
	}

	public OrdenTrabajo removeOrdenTrabajo(OrdenTrabajo ordenTrabajo) {
		getOrdenTrabajos().remove(ordenTrabajo);
		ordenTrabajo.setTipoServicio(null);

		return ordenTrabajo;
	}

}