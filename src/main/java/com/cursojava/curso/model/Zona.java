package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;

@Entity
@NamedQuery(name="Zona.findAll", query="SELECT z FROM Zona z")
public class Zona implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Getter @Setter @Column(name="id_zona")
	private int idZona;

	@Getter @Setter
	private String ciudad;

	@Getter @Setter
	private String coordenadas;

	@Getter @Setter
	private String estado;

	@Getter @Setter
	private String localidad;

	//bi-directional many-to-one association to Cuadrilla
	@Getter @Setter @OneToMany(mappedBy="zona")
	private List<Cuadrilla> cuadrillas;

	public Zona() {
	}
}