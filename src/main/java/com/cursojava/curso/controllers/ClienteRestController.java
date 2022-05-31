package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Cliente;
import com.cursojava.curso.service.ClienteServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/Cliente")
public class ClienteRestController {

    @Autowired
    private ClienteServiceAPI clienteServiceAPI;

    @GetMapping(value = "/getAll")
    public List<Cliente> getAll(){
        return clienteServiceAPI.getAll();
    }

    @PostMapping(value = "/saveCliente")
    public ResponseEntity<Cliente> save(@RequestBody Cliente tipoDocumento){
        Cliente objeto = clienteServiceAPI.save(tipoDocumento);

        return new ResponseEntity<Cliente>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateCliente/{id}")
    public ResponseEntity<Cliente> update(@RequestBody Cliente tipoDocumento, @PathVariable(value = "id") int id_documento){

        Cliente objeto = clienteServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setCedula(tipoDocumento.getCedula());
            objeto.setDireccion(tipoDocumento.getDireccion());
            objeto.setTelefono(tipoDocumento.getTelefono());
            objeto.setTipoDocumento(tipoDocumento.getTipoDocumento());
            objeto.setEstado(tipoDocumento.getEstado());
            clienteServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Cliente>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Cliente>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteCliente/{id}")
    public ResponseEntity<Cliente> delete(@PathVariable int id){
        Cliente tipoDocumento = clienteServiceAPI.get(id);
        if (tipoDocumento != null){
            clienteServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Cliente>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Cliente>(tipoDocumento, HttpStatus.OK);
    }
}