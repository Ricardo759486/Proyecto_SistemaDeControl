package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the turno_trabajo database table.
 * 
 */
@Entity
@Table(name="turno_trabajo")
@NamedQuery(name="TurnoTrabajo.findAll", query="SELECT t FROM TurnoTrabajo t")
public class TurnoTrabajo implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Getter @Setter @Column(name="id_turno")
	private int idTurno;
	@Getter @Setter @Column(name = "descripcion")
	private String descripcion;

	@Getter @Setter @Column(name = "estado")
	private String estado;

	//bi-directional many-to-one association to Cuadrilla
	@Getter @Setter @OneToMany(mappedBy="turnoTrabajoBean")
	private List<Cuadrilla> cuadrillas;

	public TurnoTrabajo() {
	}

	public Cuadrilla addCuadrilla(Cuadrilla cuadrilla) {
		getCuadrillas().add(cuadrilla);
		cuadrilla.setTurnoTrabajoBean(this);

		return cuadrilla;
	}

	public Cuadrilla removeCuadrilla(Cuadrilla cuadrilla) {
		getCuadrillas().remove(cuadrilla);
		cuadrilla.setTurnoTrabajoBean(null);

		return cuadrilla;
	}

}