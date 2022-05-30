package com.cursojava.curso.controllers;

import com.cursojava.curso.model.TipoDocumento;
import com.cursojava.curso.service.TipoDocumentoServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/Document")
public class TipoDocumentoRestController {

    @Autowired
    private TipoDocumentoServiceAPI tipoDocumentoServiceAPI;

    @GetMapping(value = "/getAll")
    public List<TipoDocumento> getAll(){
        return tipoDocumentoServiceAPI.getAll();
    }

    @PostMapping(value = "/saveTipoDocumento")
    public ResponseEntity<TipoDocumento> save(@RequestBody TipoDocumento tipoDocumento){
        TipoDocumento objeto = tipoDocumentoServiceAPI.save(tipoDocumento);

        return new ResponseEntity<TipoDocumento>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteTipoDocumento/{id}")
    public ResponseEntity<TipoDocumento> delete(@PathVariable Long id){
        TipoDocumento tipoDocumento = tipoDocumentoServiceAPI.get(id);
        if (tipoDocumento != null){
            tipoDocumentoServiceAPI.delete(id);
        }else{
            return new ResponseEntity<TipoDocumento>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TipoDocumento>(tipoDocumento, HttpStatus.OK);
    }
}
