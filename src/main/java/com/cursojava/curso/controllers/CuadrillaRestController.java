package com.cursojava.curso.controllers;

import com.cursojava.curso.model.*;
import com.cursojava.curso.service.CuadrillaServiceAPI;
import com.cursojava.curso.service.ProveedorServiceAPI;
import com.cursojava.curso.service.TurnoTrabajoServiceAPI;
import com.cursojava.curso.service.ZonaServiceAPI;
import com.cursojava.curso.service.dao.CuadrillaDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/Cuadrilla")
public class CuadrillaRestController {

    @Autowired
    private CuadrillaServiceAPI cuadrillaServiceAPI;

    @Autowired
    private ZonaServiceAPI zonaServiceAPI;

    @Autowired
    private ProveedorServiceAPI proveedorServiceAPI;

    @Autowired
    private TurnoTrabajoServiceAPI turnoTrabajoServiceAPI;

    @GetMapping(value = "/getAll")
    public List<CuadrillaDAO> getAll(){

        List<Cuadrilla> getall = cuadrillaServiceAPI.getAll();
        List<CuadrillaDAO> listaF = new ArrayList<>();

        for (Cuadrilla c:getall){
            if(c.getEstado().equals("A")) {
                CuadrillaDAO objeto = new CuadrillaDAO(c.getIdCuadrilla(),c.getMovilAsociado(),c.getProveedor().getNombre(),c.getTurnoTrabajoBean().getDescripcion(),c.getZona().getLocalidad(),c.getEstado());
                listaF.add(objeto);
            }
        }
        return listaF;
    }

    @PostMapping(value = "/saveCuadrilla/{idZona}/{idProveedor}/{turnoTrabajo}")
    public HttpStatus save(@RequestBody Cuadrilla cuadrilla,
                                          @PathVariable(value = "idZona") int idZona,
                                          @PathVariable(value = "idProveedor") int idProveedor,
                                          @PathVariable(value = "turnoTrabajo") int idTurno){
        Zona zona = zonaServiceAPI.get(idZona);
        Proveedor proveedor = proveedorServiceAPI.get(idProveedor);
        TurnoTrabajo turno = turnoTrabajoServiceAPI.get(idTurno);
        cuadrilla.setZona(zona);
        cuadrilla.setProveedor(proveedor);
        cuadrilla.setTurnoTrabajoBean(turno);
        cuadrillaServiceAPI.save(cuadrilla);

        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateCuadrilla/{id}/{idZona}/{idProveedor}/{turnoTrabajo}")
    public HttpStatus update(@RequestBody Cuadrilla cuadrilla,
                                            @PathVariable(value = "id") int id,
                                            @PathVariable(value = "idZona") int idZona,
                                            @PathVariable(value = "idProveedor") int idProveedor,
                                            @PathVariable(value = "turnoTrabajo") int idTurno){

        Cuadrilla objeto = cuadrillaServiceAPI.get(id);
        Zona zona = zonaServiceAPI.get(idZona);
        Proveedor proveedor = proveedorServiceAPI.get(idProveedor);
        TurnoTrabajo turno = turnoTrabajoServiceAPI.get(idTurno);
        if (objeto != null){
            objeto.setZona(zona);
            objeto.setMovilAsociado(cuadrilla.getMovilAsociado());
            objeto.setProveedor(proveedor);
            objeto.setTurnoTrabajoBean(turno);
            objeto.setEstado(cuadrilla.getEstado());
            cuadrillaServiceAPI.save(objeto);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteCuadrilla/{id}")
    public HttpStatus delete(@PathVariable int id){
        Cuadrilla cuadrilla = cuadrillaServiceAPI.get(id);
        if (cuadrilla != null){
            cuadrillaServiceAPI.delete(id);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}
