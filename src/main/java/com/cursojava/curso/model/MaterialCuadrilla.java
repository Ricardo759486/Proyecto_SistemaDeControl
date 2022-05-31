package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the material_cuadrilla database table.
 * 
 */
@Entity
@Table(name="material_cuadrilla")
@NamedQuery(name="MaterialCuadrilla.findAll", query="SELECT m FROM MaterialCuadrilla m")
public class MaterialCuadrilla implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.TABLE)
	@Getter @Setter @Column(name="id_registro")
	private int idRegistro;

	@Getter @Setter @Column(name = "cantidad")
	private int cantidad;

	//bi-directional many-to-one association to Cuadrilla
	@ManyToOne
	@Getter @Setter @JoinColumn(name="id_cuadrilla")
	private Cuadrilla cuadrilla;

	//bi-directional many-to-one association to Material
	@ManyToOne
	@Getter @Setter @JoinColumn(name="id_material")
	private Material material;

	public MaterialCuadrilla() {
	}

}