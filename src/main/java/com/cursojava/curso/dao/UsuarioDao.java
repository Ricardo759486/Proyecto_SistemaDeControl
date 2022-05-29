package com.cursojava.curso.dao;

import com.cursojava.curso.model.Usuario88;

import java.util.List;

public interface UsuarioDao {

    List<Usuario88> getUsuarios();

    void eliminar(Long id);

    void registrar(Usuario88 usuario);

    Usuario88 obtenerUsuarioPorCredenciales(Usuario88 usuario);
}
