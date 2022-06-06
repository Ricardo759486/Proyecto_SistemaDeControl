package com.cursojava.curso.controllers;

import com.cursojava.curso.model.TipoServicio;
import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.service.TipoServicioServiceAPI;
import com.cursojava.curso.service.dao.TipoServicioDAO;
import com.cursojava.curso.service.dao.UsuarioDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/TipoServicio")
public class TipoServicioRestController {

    @Autowired
    private TipoServicioServiceAPI tipoServicioServiceAPI;

    @GetMapping(value = "/getAll")
    public List<TipoServicioDAO> getAll(){
        List<TipoServicio> getall = tipoServicioServiceAPI.getAll();
        List<TipoServicioDAO> listaF = new ArrayList<>();

        for (TipoServicio t:getall){
            if(t.getEstado().equals("A")){
                TipoServicioDAO objeto = new TipoServicioDAO(t.getIdServicio(),t.getDescripcion(),t.getEstado());
                listaF.add(objeto);
            }
        }
        return listaF;
    }

    @PostMapping(value = "/saveTipoServicio")
    public HttpStatus save(@RequestBody TipoServicio tipoServicio){
        tipoServicioServiceAPI.save(tipoServicio);
        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateTipoServicio/{id}")
    public HttpStatus update(@RequestBody TipoServicio tipoServicio, @PathVariable(value = "id") int id){

        TipoServicio objeto = tipoServicioServiceAPI.get(id);
        if (objeto != null){
            objeto.setDescripcion(tipoServicio.getDescripcion());
            objeto.setEstado(tipoServicio.getEstado());
            tipoServicioServiceAPI.save(objeto);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteTipoServicio/{id}")
    public HttpStatus delete(@PathVariable int id){
        TipoServicio tipoServicio = tipoServicioServiceAPI.get(id);
        if (tipoServicio != null){
            tipoServicio.setEstado("D");
            tipoServicioServiceAPI.save(tipoServicio);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}