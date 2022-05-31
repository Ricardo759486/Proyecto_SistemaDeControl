package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;

/**
 * The persistent class for the auditoria database table.
 * 
 */
@Entity
@NamedQuery(name="Auditoria.findAll", query="SELECT a FROM Auditoria a")
public class Auditoria implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Getter @Setter @Column(name="id_informe")
	private int idInforme;

	@Getter @Setter @Column(name = "evento")
	private String evento;

	@Temporal(TemporalType.TIMESTAMP)
	@Getter @Setter @Column(name="fecha_hora")
	private Date fechaHora;

	@Getter @Setter @Column(name = "tabla")
	private String tabla;

	//bi-directional many-to-one association to Usuario
	@ManyToOne
	@Getter @Setter @JoinColumn(name="id_usuario")
	private Usuario usuario;

	public Auditoria() {
	}
}