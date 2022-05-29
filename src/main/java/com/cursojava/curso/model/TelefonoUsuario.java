package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the telefono_usuario database table.
 * 
 */
@Entity
@Table(name="telefono_usuario")
@NamedQuery(name="TelefonoUsuario.findAll", query="SELECT t FROM TelefonoUsuario t")
public class TelefonoUsuario implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Getter @Setter @Column(name="id_telefono")
	private int idTelefono;

	@Getter @Setter @Column(name="num_telefono")
	private int numTelefono;

	//bi-directional many-to-one association to Usuario
	@ManyToOne
	@Getter @Setter @JoinColumn(name="id_usuario")
	private Usuario usuario;

	public TelefonoUsuario() {
	}

}