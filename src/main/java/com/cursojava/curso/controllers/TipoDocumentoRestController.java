package com.cursojava.curso.controllers;

import com.cursojava.curso.model.TipoDocumento;
import com.cursojava.curso.model.Zona;
import com.cursojava.curso.service.TipoDocumentoServiceAPI;
import com.cursojava.curso.service.dao.TipoDocumentoDAO;
import com.cursojava.curso.service.dao.ZonaDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/Document")
public class TipoDocumentoRestController {

    @Autowired
    private TipoDocumentoServiceAPI tipoDocumentoServiceAPI;

    @GetMapping(value = "/getAll")
    public List<TipoDocumentoDAO> getAll(){
        List<TipoDocumento> getall = tipoDocumentoServiceAPI.getAll();
        List<TipoDocumentoDAO> listaF = new ArrayList<>();

        for (TipoDocumento t:getall){
            if(t.getEstado().equals("A")){
                TipoDocumentoDAO objeto = new TipoDocumentoDAO(t.getIdDocumento(),t.getDescripcion(),t.getEstado());
                listaF.add(objeto);
            }
        }
        return listaF;
    }

    @PostMapping(value = "/saveTipoDocumento")
    public HttpStatus save(@RequestBody TipoDocumento tipoDocumento){
        tipoDocumento.setEstado("A");
        tipoDocumentoServiceAPI.save(tipoDocumento);
        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateTipoDocumento/{id}")
    public HttpStatus update(@RequestBody TipoDocumento tipoDocumento, @PathVariable(value = "id") int id_documento){

        TipoDocumento objeto = tipoDocumentoServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setDescripcion(tipoDocumento.getDescripcion());
            objeto.setEstado(tipoDocumento.getEstado());
            tipoDocumentoServiceAPI.save(objeto);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteTipoDocumento/{id}")
    public HttpStatus delete(@PathVariable int id){
        TipoDocumento tipoDocumento = tipoDocumentoServiceAPI.get(id);
        if (tipoDocumento != null){
            tipoDocumento.setEstado("D");
            tipoDocumentoServiceAPI.save(tipoDocumento);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}