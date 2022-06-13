package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Parametro;
import com.cursojava.curso.service.ParametroServiceAPI;
import com.cursojava.curso.service.dao.ParametroDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/Parametro")
public class ParametroRestController {

    @Autowired
    private ParametroServiceAPI parametroServiceAPI;

    @Autowired
    private AuditoriaRestController audi;

    @GetMapping(value = "/getAll")
    public List<ParametroDAO> getAll(){

        List<Parametro> getall = parametroServiceAPI.getAll();
        List<ParametroDAO> listaF = new ArrayList<>();

        for (Parametro p:getall){
                ParametroDAO objeto = new ParametroDAO(p.getIdParametro(),p.getDescripcion(),p.getTipo(),p.getValor());
                listaF.add(objeto);
        }
        return listaF;
    }

    @PostMapping(value = "/saveParametro/{idUsuario}")
    public HttpStatus save(@RequestBody Parametro parametro, @PathVariable(value = "idUsuario") int idUsuario){
        parametroServiceAPI.save(parametro);
        audi.saveAuditoria("Guardar", "Parametro",idUsuario);
        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateParametro/{id}/{idUsuario}")
    public HttpStatus update(@RequestBody Parametro parametro, @PathVariable(value = "id") int id, @PathVariable(value = "idUsuario") int idUsuario){
        Parametro objeto = parametroServiceAPI.get(id);
        if (objeto != null){
            objeto.setTipo(parametro.getTipo());
            objeto.setDescripcion(parametro.getDescripcion());
            objeto.setValor(parametro.getValor());
            parametroServiceAPI.save(objeto);
            audi.saveAuditoria("Actualizar", "Parametro",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteParametro/{id}/{idUsuario}")
    public HttpStatus delete(@PathVariable int id, @PathVariable(value = "idUsuario") int idUsuario ){
        Parametro parametro = parametroServiceAPI.get(id);
        if (parametro != null){
            parametroServiceAPI.delete(id);
            audi.saveAuditoria("Eliminar", "Parametro",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}
