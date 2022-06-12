package com.cursojava.curso.controllers;

import com.cursojava.curso.model.*;
import com.cursojava.curso.service.ClienteServiceAPI;
import com.cursojava.curso.service.ProveedorServiceAPI;
import com.cursojava.curso.service.TelefonoServiceAPI;
import com.cursojava.curso.service.UsuarioServiceAPI;
import com.cursojava.curso.service.dao.TelefonoDAO;
import com.cursojava.curso.service.dao.ZonaDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/Telefono")
public class TelefonoRestController {

    @Autowired
    private TelefonoServiceAPI telefonoServiceAPI;
    @Autowired
    private UsuarioServiceAPI usuarioServiceAPI;
    @Autowired
    private ClienteServiceAPI clienteServiceAPI;
    @Autowired
    private ProveedorServiceAPI proveedorServiceAPI;

    @GetMapping(value = "/getAll")
    public List<TelefonoDAO> getAll(){
        List<Telefono> getall = telefonoServiceAPI.getAll();
        List<TelefonoDAO> listaF = new ArrayList<>();
        TelefonoDAO objeto;

        for (Telefono t:getall){
            switch (t.getTipo()){
                case "U":
                        objeto = new TelefonoDAO(t.getIdTelefono(),t.getNumTelefono(),t.getTipo(),"", "",t.getUsuario().getIdentificacion());
                        listaF.add(objeto);
                    break;
                case "P":
                        objeto = new TelefonoDAO(t.getIdTelefono(),t.getNumTelefono(),t.getTipo(),"", t.getProveedor().getNombre(),"");
                        listaF.add(objeto);
                    break;
                case "C":
                        objeto = new TelefonoDAO(t.getIdTelefono(),t.getNumTelefono(),t.getTipo(),t.getCliente().getNumDocumento(), "","");
                        listaF.add(objeto);
                    break;
                default: return null;
            }
        }
        return listaF;
    }

    @PostMapping(value = "/saveTelefono/{id}")
    public HttpStatus save(@RequestBody Telefono telefonoCliente,
                                         @PathVariable(value = "id") int id){
        String tipo = telefonoCliente.getTipo();
        switch (tipo){
            case "U":  Usuario usuario = usuarioServiceAPI.get(id);
                telefonoCliente.setUsuario(usuario);
                break;
            case "P":  Proveedor proveedor = proveedorServiceAPI.get(id);
                telefonoCliente.setProveedor(proveedor);
                break;
            case "C":  Cliente cliente = clienteServiceAPI.get(id);
                telefonoCliente.setCliente(cliente);
                break;
            default: return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        telefonoServiceAPI.save(telefonoCliente);
        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateTelefono/{id}/{idTipo}")
    public HttpStatus update(@RequestBody Telefono telefonoCliente,
                                           @PathVariable(value = "id") int id,
                                           @PathVariable(value = "idTipo") int idTipo){

        Telefono objeto = telefonoServiceAPI.get(id);
        if (objeto != null){
            String tipo = telefonoCliente.getTipo();
            objeto.setNumTelefono(telefonoCliente.getNumTelefono());
            objeto.setTipo(tipo);
            switch (tipo){
                case "U":  Usuario usuario = usuarioServiceAPI.get(idTipo);
                objeto.setUsuario(usuario);
                break;
                case "P":  Proveedor proveedor = proveedorServiceAPI.get(idTipo);
                objeto.setProveedor(proveedor);
                break;
                case "C": Cliente cliente = clienteServiceAPI.get(idTipo);
                objeto.setCliente(cliente);
                break;
                default: return HttpStatus.INTERNAL_SERVER_ERROR;
            }
            telefonoServiceAPI.save(objeto);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteTelefono/{id}")
    public HttpStatus delete(@PathVariable int id){
        Telefono telefonoCliente = telefonoServiceAPI.get(id);
        if (telefonoCliente != null){
            telefonoServiceAPI.delete(id);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}