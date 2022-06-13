package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Rol;
import com.cursojava.curso.model.Zona;
import com.cursojava.curso.service.RolServiceAPI;
import com.cursojava.curso.service.dao.RolDAO;
import com.cursojava.curso.service.dao.ZonaDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/Rol")
public class RolRestController {

    @Autowired
    private RolServiceAPI rolServiceAPI;

    @Autowired
    private AuditoriaRestController audi;

    @GetMapping(value = "/getAll")
    public List<RolDAO> getAll(){
        List<Rol> getall = rolServiceAPI.getAll();
        List<RolDAO> listaF = new ArrayList<>();

        for (Rol r:getall){
            if(r.getEstado().equals("A")){
                RolDAO objeto = new RolDAO(r.getIdRol(),r.getTipoRol(),r.getEstado());
                listaF.add(objeto);
            }
        }
        return listaF;
    }

    @PostMapping(value = "/saveRol/{idUsuario}")
    public HttpStatus save(@RequestBody Rol rol, @PathVariable(value = "idUsuario") int idUsuario){
        rol.setEstado("A");
        rolServiceAPI.save(rol);
        audi.saveAuditoria("Guardar", "Rol",idUsuario);
        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateRol/{id}/{idUsuario}")
    public HttpStatus update(@RequestBody Rol rol, @PathVariable(value = "id") int id, @PathVariable(value = "idUsuario") int idUsuario){

        Rol objeto = rolServiceAPI.get(id);
        if (objeto != null){
            objeto.setTipoRol(rol.getTipoRol());
            objeto.setEstado(rol.getEstado());
            rolServiceAPI.save(objeto);
            audi.saveAuditoria("Actualizar", "Rol",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteRol/{id}/{idUsuario}")
    public HttpStatus delete(@PathVariable int id, @PathVariable(value = "idUsuario") int idUsuario){
        Rol rol = rolServiceAPI.get(id);
        if (rol != null){
            rol.setEstado("D");
            rolServiceAPI.save(rol);
            audi.saveAuditoria("Eliminar", "Rol",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}
