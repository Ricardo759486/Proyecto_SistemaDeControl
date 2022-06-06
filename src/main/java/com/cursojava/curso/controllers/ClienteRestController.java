package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Cliente;
import com.cursojava.curso.model.TipoDocumento;
import com.cursojava.curso.service.ClienteServiceAPI;
import com.cursojava.curso.service.TipoDocumentoServiceAPI;
import com.cursojava.curso.service.dao.ClienteDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/Cliente")
public class ClienteRestController {

    @Autowired
    private ClienteServiceAPI clienteServiceAPI;

    @Autowired
    private TipoDocumentoServiceAPI tipoDocumentoServiceAPI;

    @GetMapping(value = "/getAll")
    public List<ClienteDAO> getAll(){

        List<Cliente> getall = clienteServiceAPI.getAll();
        List<ClienteDAO> listaF = new ArrayList<>();

        for (Cliente c:getall){
            if(c.getEstado().equals("A")){
                ClienteDAO objeto = new ClienteDAO(c.getIdCliente(),c.getDireccion(),c.getTipoDocumento().getDescripcion(),c.getNumDocumento(),c.getEstado());
                listaF.add(objeto);
            }
        }

        return listaF;
    }

    @PostMapping(value = "/saveCliente/{idDocumento}")
    public HttpStatus save(@RequestBody Cliente cliente,
                                        @PathVariable(value = "idDocumento") int idDocumento){

        TipoDocumento tipoDocumento = tipoDocumentoServiceAPI.get(idDocumento);
        cliente.setTipoDocumento(tipoDocumento);
        clienteServiceAPI.save(cliente);
        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateCliente/{id}/{idDocumento}")
    public HttpStatus update(@RequestBody Cliente cliente,
                                          @PathVariable(value = "id") int id,
                                          @PathVariable(value = "idDocumento") int idDocumento){

        Cliente objeto = clienteServiceAPI.get(id);
        TipoDocumento tipoDocumento = tipoDocumentoServiceAPI.get(idDocumento);
        if (objeto != null){
            objeto.setNumDocumento(cliente.getNumDocumento());
            objeto.setDireccion(cliente.getDireccion());
            objeto.setTipoDocumento(tipoDocumento);
            objeto.setEstado(cliente.getEstado());
            clienteServiceAPI.save(objeto);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteCliente/{id}")
    public HttpStatus delete(@PathVariable int id){
        Cliente cliente = clienteServiceAPI.get(id);
        if (cliente != null){
            cliente.setEstado("D");
            clienteServiceAPI.save(cliente);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}