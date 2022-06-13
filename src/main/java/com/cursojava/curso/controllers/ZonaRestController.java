package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Zona;
import com.cursojava.curso.service.AuditoriaServiceAPI;
import com.cursojava.curso.service.ZonaServiceAPI;
import com.cursojava.curso.service.dao.ZonaDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/Zona")
public class ZonaRestController {

    @Autowired
    private ZonaServiceAPI zonaServiceAPI;

    @Autowired
    private AuditoriaRestController audi;

    @GetMapping(value = "/getAll")
    public List<ZonaDAO> getAll(){

        List<Zona> getall = zonaServiceAPI.getAll();
        List<ZonaDAO> listaF = new ArrayList<>();

        for (Zona z:getall){
            if(z.getEstado().equals("A")){
                ZonaDAO objeto = new ZonaDAO(z.getIdZona(), z.getCiudad(), z.getLocalidad(), z.getCoordenadas(), z.getEstado() );
                listaF.add(objeto);
            }
        }
        return listaF;
    }

    @PostMapping(value = "/saveZona/{idUsuario}")
    public HttpStatus save(@RequestBody Zona zona, @PathVariable(value = "idUsuario") int idUsuario){
        zona.setEstado("A");
        zonaServiceAPI.save(zona);
        audi.saveAuditoria("Guardar", "Zona",idUsuario);
        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateZona/{id}/{idUsuario}")
    public HttpStatus update(@RequestBody Zona zona, @PathVariable(value = "id") int id, @PathVariable(value = "idUsuario") int idUsuario){
        Zona objeto = zonaServiceAPI.get(id);
        if (objeto != null){
            objeto.setCoordenadas(zona.getCoordenadas());
            objeto.setCiudad(zona.getCiudad());
            objeto.setLocalidad(zona.getLocalidad());
            objeto.setEstado(zona.getEstado());
            zonaServiceAPI.save(objeto);
            audi.saveAuditoria("Actualizar", "Zona",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteZona/{id}/{idUsuario}")
    public HttpStatus delete(@PathVariable int id, @PathVariable(value = "idUsuario") int idUsuario){
        Zona zona = zonaServiceAPI.get(id);
        if (zona != null){
            zona.setEstado("D");
            zonaServiceAPI.delete(id);
            audi.saveAuditoria("Eliminar", "Zona",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}

