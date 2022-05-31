package com.cursojava.curso.model;

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
	@Column(name="id_parametro")
	private int idParametro;

	private String descripcion;

	private String tipo;

	@Column(name="valor_fecha")
	private String valorFecha;

	@Column(name="valor_num")
	private String valorNum;

	@Column(name="valor_texto")
	private String valorTexto;

	public Parametro() {
	}

	public int getIdParametro() {
		return this.idParametro;
	}

	public void setIdParametro(int idParametro) {
		this.idParametro = idParametro;
	}

	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getTipo() {
		return this.tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getValorFecha() {
		return this.valorFecha;
	}

	public void setValorFecha(String valorFecha) {
		this.valorFecha = valorFecha;
	}

	public String getValorNum() {
		return this.valorNum;
	}

	public void setValorNum(String valorNum) {
		this.valorNum = valorNum;
	}

	public String getValorTexto() {
		return this.valorTexto;
	}

	public void setValorTexto(String valorTexto) {
		this.valorTexto = valorTexto;
	}

}