package com.cursojava.curso.service;

import com.cursojava.curso.commons.GenericServiceAPI;
import com.cursojava.curso.model.Usuario;

public interface UsuarioServiceAPI extends GenericServiceAPI<Usuario, Integer> {

    Usuario login(String correo, String clave);

    boolean validarEstado(Usuario u);
}
