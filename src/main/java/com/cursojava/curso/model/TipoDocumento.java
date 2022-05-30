package com.cursojava.curso.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the tipo_documento database table.
 * 
 */
@Entity
@Table(name="tipo_documento")
@NamedQuery(name="TipoDocumento.findAll", query="SELECT t FROM TipoDocumento t")
@ToString @EqualsAndHashCode
public class TipoDocumento implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Getter @Setter @Column(name="id_documento")
	private int idDocumento;

	@Getter @Setter @Column(name = "descripcion")
	private String descripcion;

	@Getter @Setter @Column(name = "estado")
	private String estado;

	//bi-directional many-to-one association to Cliente
	@Getter @Setter @OneToMany(mappedBy="tipoDocumento")
	private List<Cliente> clientes;

	//bi-directional many-to-one association to Usuario
	@Getter @Setter @OneToMany(mappedBy="tipoDocumento")
	private List<Usuario> usuarios;

	public TipoDocumento() {
	}

	public Cliente addCliente(Cliente cliente) {
		getClientes().add(cliente);
		cliente.setTipoDocumento(this);

		return cliente;
	}

	public Cliente removeCliente(Cliente cliente) {
		getClientes().remove(cliente);
		cliente.setTipoDocumento(null);

		return cliente;
	}

	public Usuario addUsuario(Usuario usuario) {
		getUsuarios().add(usuario);
		usuario.setTipoDocumento(this);

		return usuario;
	}

	public Usuario removeUsuario(Usuario usuario) {
		getUsuarios().remove(usuario);
		usuario.setTipoDocumento(null);

		return usuario;
	}

}