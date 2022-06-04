package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;

	/**
	 * The persistent class for the telefono database table.
	 *
	 */
	@Entity
	@NamedQuery(name="Telefono.findAll", query="SELECT t FROM Telefono t")
	public class Telefono implements Serializable {
		private static final long serialVersionUID = 1L;

		@Id
		@Getter @Setter @Column(name="id_telefono")
		private int idTelefono;

		@Getter @Setter @Column(name="num_telefono")
		private String numTelefono;

		@Getter @Setter @Column(name="tipo")
		private String tipo;

		//bi-directional many-to-one association to Cliente
		@ManyToOne
		@Getter @Setter @JoinColumn(name="id_usu")
		private Cliente cliente;

		//bi-directional many-to-one association to Proveedor
		@ManyToOne
		@Getter @Setter @JoinColumn(name="id_prove")
		private Proveedor proveedor;

		//bi-directional many-to-one association to Usuario
		@ManyToOne
		@Getter @Setter @JoinColumn(name="id_clie")
		private Usuario usuario;

		public Telefono() {
		}
}