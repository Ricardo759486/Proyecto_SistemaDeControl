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
    public ResponseEntity<TipoServicio> save(@RequestBody TipoServicio tipoServicio){
        TipoServicio objeto = tipoServicioServiceAPI.save(tipoServicio);

        return new ResponseEntity<TipoServicio>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateTipoServicio/{id}")
    public ResponseEntity<TipoServicio> update(@RequestBody TipoServicio tipoServicio, @PathVariable(value = "id") int id){

        TipoServicio objeto = tipoServicioServiceAPI.get(id);
        if (objeto != null){
            objeto.setDescripcion(tipoServicio.getDescripcion());
            objeto.setEstado(tipoServicio.getEstado());
            tipoServicioServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<TipoServicio>(tipoServicio, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TipoServicio>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteTipoServicio/{id}")
    public ResponseEntity<TipoServicio> delete(@PathVariable int id){
        TipoServicio tipoServicio = tipoServicioServiceAPI.get(id);
        if (tipoServicio != null){
            tipoServicioServiceAPI.delete(id);
        }else{
            return new ResponseEntity<TipoServicio>(tipoServicio, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TipoServicio>(tipoServicio, HttpStatus.OK);
    }
}