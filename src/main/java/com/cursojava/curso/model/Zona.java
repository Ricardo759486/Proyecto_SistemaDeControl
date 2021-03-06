package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "zona")
public class Zona implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Getter @Setter @Column(name="id_zona")
	private int idZona;

	@Getter @Setter @Column(name = "ciudad")
	private String ciudad;

	@Getter @Setter @Column(name = "coordenadas")
	private String coordenadas;

	@Getter @Setter @Column(name = "localidad")
	private String localidad;

	@Getter @Setter @Column(name = "estado")
	private String estado;

	//bi-directional many-to-one association to Cuadrilla
	@Getter @Setter @OneToMany(mappedBy="zona")
	private List<Cuadrilla> cuadrillas;

	public Zona() {
	}

	public Cuadrilla addCuadrilla(Cuadrilla cuadrilla) {
		getCuadrillas().add(cuadrilla);
		cuadrilla.setZona(this);

		return cuadrilla;
	}

	public Cuadrilla removeCuadrilla(Cuadrilla cuadrilla) {
		getCuadrillas().remove(cuadrilla);
		cuadrilla.setZona(null);

		return cuadrilla;
	}
}