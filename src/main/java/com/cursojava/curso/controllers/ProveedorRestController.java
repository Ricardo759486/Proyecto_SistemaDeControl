package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Proveedor;
import com.cursojava.curso.service.ProveedorServiceAPI;
import com.cursojava.curso.service.dao.ProveedorDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/Proveedor")
public class ProveedorRestController {

    @Autowired
    private ProveedorServiceAPI proveedorServiceAPI;

    @Autowired
    private AuditoriaRestController audi;

    @GetMapping(value = "/getAll")
    public List<ProveedorDAO> getAll(){
        List<Proveedor> getall = proveedorServiceAPI.getAll();
        List<ProveedorDAO> listaF = new ArrayList<>();

        for (Proveedor p:getall){
            if(p.getEstado().equals("A")){
                ProveedorDAO objeto = new ProveedorDAO(p.getIdProveedor(),p.getNombre(),p.getNit(),p.getEmail(),p.getDireccion(),p.getEstado());
                listaF.add(objeto);
            }
        }
        return listaF;
    }

    @PostMapping(value = "/saveProveedor/{idUsuario}")
    public HttpStatus save(@RequestBody Proveedor proveedor, @PathVariable(value = "idUsuario") int idUsuario){

        proveedor.setEstado("A");
        proveedorServiceAPI.save(proveedor);
        audi.saveAuditoria("Guardar", "Proveedor",idUsuario);
        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateProveedor/{id}/{idUsuario}")
    public HttpStatus update(@RequestBody Proveedor proveedor, @PathVariable(value = "id") int id, @PathVariable(value = "idUsuario") int idUsuario){

        Proveedor objeto = proveedorServiceAPI.get(id);
        if (objeto != null) {
            objeto.setDireccion(proveedor.getDireccion());
            objeto.setNombre(proveedor.getNombre());
            objeto.setEmail(proveedor.getEmail());
            objeto.setNit(proveedor.getNit());
            objeto.setEstado(proveedor.getEstado());
            proveedorServiceAPI.save(objeto);
            audi.saveAuditoria("Actualizar", "Proveedor",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteProveedor/{id}/{idUsuario}")
    public HttpStatus delete(@PathVariable int id, @PathVariable(value = "idUsuario") int idUsario){
        Proveedor proveedor = proveedorServiceAPI.get(id);
        if (proveedor != null){
            proveedor.setEstado("D");
            proveedorServiceAPI.save(proveedor);
            audi.saveAuditoria("Eliminar", "Proveedor",idUsario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}