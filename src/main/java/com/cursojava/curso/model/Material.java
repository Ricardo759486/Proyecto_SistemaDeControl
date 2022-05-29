package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the material database table.
 * 
 */
@Entity
@NamedQuery(name="Material.findAll", query="SELECT m FROM Material m")
public class Material implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Getter @Setter @Column(name="id_inventario")
	private int idInventario;

	@Getter @Setter
	private int cantidad;

	@Getter @Setter
	private int costo;

	@Getter @Setter
	private String estado;

	@Getter @Setter @Column(name="nombre_material")
	private String nombreMaterial;

	//bi-directional many-to-one association to MaterialCuadrilla
	@Getter @Setter @OneToMany(mappedBy="material")
	private List<MaterialCuadrilla> materialCuadrillas;

	public Material() {
	}

	public MaterialCuadrilla addMaterialCuadrilla(MaterialCuadrilla materialCuadrilla) {
		getMaterialCuadrillas().add(materialCuadrilla);
		materialCuadrilla.setMaterial(this);

		return materialCuadrilla;
	}

	public MaterialCuadrilla removeMaterialCuadrilla(MaterialCuadrilla materialCuadrilla) {
		getMaterialCuadrillas().remove(materialCuadrilla);
		materialCuadrilla.setMaterial(null);

		return materialCuadrilla;
	}

}