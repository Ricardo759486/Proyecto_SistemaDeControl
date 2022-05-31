package com.cursojava.curso.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the telefono_cliente database table.
 * 
 */
@Entity
@Table(name="telefono_cliente")
@NamedQuery(name="TelefonoCliente.findAll", query="SELECT t FROM TelefonoCliente t")
public class TelefonoCliente implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Getter @Setter @Column(name="id_telefono")
	private int idTelefono;

	@Getter @Setter @Column(name="numero_telefono")
	private String numeroTelefono;

	//bi-directional many-to-one association to Cliente
	@ManyToOne
	@Getter @Setter @JoinColumn(name="id_cliente")
	private Cliente cliente;

	public TelefonoCliente() {
	}

}