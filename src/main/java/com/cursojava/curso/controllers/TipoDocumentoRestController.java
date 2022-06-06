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
    public ResponseEntity<TipoDocumento> save(@RequestBody TipoDocumento tipoDocumento){
        TipoDocumento objeto = tipoDocumentoServiceAPI.save(tipoDocumento);

        return new ResponseEntity<TipoDocumento>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateTipoDocumento/{id}")
    public ResponseEntity<TipoDocumento> update(@RequestBody TipoDocumento tipoDocumento, @PathVariable(value = "id") int id_documento){

        TipoDocumento objeto = tipoDocumentoServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setDescripcion(tipoDocumento.getDescripcion());
            objeto.setEstado(tipoDocumento.getEstado());
            tipoDocumentoServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<TipoDocumento>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TipoDocumento>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteTipoDocumento/{id}")
    public ResponseEntity<TipoDocumento> delete(@PathVariable int id){
        TipoDocumento tipoDocumento = tipoDocumentoServiceAPI.get(id);
        if (tipoDocumento != null){
            tipoDocumentoServiceAPI.delete(id);
        }else{
            return new ResponseEntity<TipoDocumento>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TipoDocumento>(tipoDocumento, HttpStatus.OK);
    }
}