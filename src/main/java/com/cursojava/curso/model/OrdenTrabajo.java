package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The persistent class for the orden_trabajo database table.
 * 
 */
@Entity
@Table(name="orden_trabajo")
@NamedQuery(name="OrdenTrabajo.findAll", query="SELECT o FROM OrdenTrabajo o")
public class OrdenTrabajo implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Getter @Setter@Column(name="id_orden_trabajo")
	private int idOrdenTrabajo;

	@Getter @Setter @Column(name = "descripcion")
	private String descripcion;

	@Getter @Setter @Column(name = "estado")
	private String estado;

	//bi-directional many-to-one association to Cliente
	@ManyToOne
	@Getter @Setter @JoinColumn(name="id_cliente")
	private Cliente cliente;

	//bi-directional many-to-one association to Cuadrilla
	@ManyToOne
	@Getter @Setter @JoinColumn(name="id_cuadrilla")
	private Cuadrilla cuadrilla;

	//bi-directional many-to-one association to TipoServicio
	@ManyToOne
	@Getter @Setter @JoinColumn(name="id_tipo_servicio")
	private TipoServicio tipoServicio;

	public OrdenTrabajo() {
	}
}