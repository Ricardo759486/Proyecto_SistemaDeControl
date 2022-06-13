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

    @Autowired
    private AuditoriaRestController audi;

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

    @PostMapping(value = "/saveTipoServicio/{idUsuario}")
    public HttpStatus save(@RequestBody TipoServicio tipoServicio,  @PathVariable(value = "idUsuario") int idUsuario){
        tipoServicio.setEstado("A");
        tipoServicioServiceAPI.save(tipoServicio);
        audi.saveAuditoria("Guardar", "TipoServicio",idUsuario);
        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateTipoServicio/{id}/{idUsuario}")
    public HttpStatus update(@RequestBody TipoServicio tipoServicio, @PathVariable(value = "id") int id,  @PathVariable(value = "idUsuario") int idUsuario){

        TipoServicio objeto = tipoServicioServiceAPI.get(id);
        if (objeto != null){
            objeto.setDescripcion(tipoServicio.getDescripcion());
            objeto.setEstado(tipoServicio.getEstado());
            tipoServicioServiceAPI.save(objeto);
            audi.saveAuditoria("Actualizar", "TipoServicio",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteTipoServicio/{id}/{idUsuario}")
    public HttpStatus delete(@PathVariable int id,  @PathVariable(value = "idUsuario") int idUsuario){
        TipoServicio tipoServicio = tipoServicioServiceAPI.get(id);
        if (tipoServicio != null){
            tipoServicio.setEstado("D");
            tipoServicioServiceAPI.save(tipoServicio);
            audi.saveAuditoria("Eliminar", "TipoServicio",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}