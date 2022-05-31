package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the telefono_proveedor database table.
 * 
 */
@Entity
@Table(name="telefono_proveedor")
@NamedQuery(name="TelefonoProveedor.findAll", query="SELECT t FROM TelefonoProveedor t")
public class TelefonoProveedor implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Getter @Setter @Column(name="id_telefono")
	private int idTelefono;

	@Getter @Setter @Column(name="numero_telefono")
	private String numeroTelefono;

	//bi-directional many-to-one association to Proveedor
	@ManyToOne
	@Getter @Setter @JoinColumn(name="nit_proveedor")
	private Proveedor proveedor;

	public TelefonoProveedor() {
	}

}