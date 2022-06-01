package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="tipo_servicio")
@NamedQuery(name="TipoServicio.findAll", query="SELECT t FROM TipoServicio t")
public class TipoServicio implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Getter @Setter @Column(name="id_servicio")
	private int idServicio;

	@Getter @Setter @Column(name = "descripcion")
	private String descripcion;

	@Getter @Setter @Column(name = "estado")
	private String estado;

	//bi-directional many-to-one association to OrdenTrabajo
	@Getter @Setter @OneToMany(mappedBy="tipoServicio")
	private List<OrdenTrabajo> ordenTrabajos;

	public TipoServicio() {
	}
}