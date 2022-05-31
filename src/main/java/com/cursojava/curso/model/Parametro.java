package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The persistent class for the parametro database table.
 * 
 */
@Entity
@NamedQuery(name="Parametro.findAll", query="SELECT p FROM Parametro p")
public class Parametro implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.TABLE)
	@Column(name="id_parametro")
	private int idParametro;

	@Getter @Setter @Column(name="descripcion")
	private String descripcion;

	@Getter @Setter @Column(name="tipo")
	private String tipo;

	@Getter @Setter @Column(name="valor_fecha")
	private String valorFecha;

	@Getter @Setter @Column(name="valor_num")
	private String valorNum;

	@Getter @Setter @Column(name="valor_texto")
	private String valorTexto;

	public Parametro() {
	}
}