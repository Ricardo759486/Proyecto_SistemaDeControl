package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the auditoria database table.
 * 
 */
@Entity
@NamedQuery(name="Auditoria.findAll", query="SELECT a FROM Auditoria a")
public class Auditoria implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Getter @Setter @Column(name="id_informe")
	private int idInforme;

	@Getter @Setter
	private String evento;

	@Getter @Setter @Column(name="fecha_hora")
	private String fechaHora;

	@Getter @Setter
	private String tabal;

	//bi-directional many-to-one association to Usuario
	@ManyToOne
	@Getter @Setter @JoinColumn(name="id_usuario")
	private Usuario usuario;

	public Auditoria() {
	}

}