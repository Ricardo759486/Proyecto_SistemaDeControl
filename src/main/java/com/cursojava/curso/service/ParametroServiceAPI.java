package com.cursojava.curso.service;

import com.cursojava.curso.commons.GenericServiceAPI;
import com.cursojava.curso.model.Parametro;

public interface ParametroServiceAPI extends GenericServiceAPI<Parametro, Integer> {
    int paraCantDias();

    int intentosPermitidos();
}
