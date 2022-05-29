package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.service.UsuarioServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioServiceAPI usuarioServiceAPI;

    @RequestMapping("/")
    public String index(Model model){
        model.addAttribute("list", usuarioServiceAPI.getAll());
        return "index";
    }

    @GetMapping("/save{id}")
    public String viewSave(@PathVariable("id") long id, Model model){
        if (id != 0){
            model.addAttribute("usuario", usuarioServiceAPI.get(id));
        }else{
            model.addAttribute("usuario", new Usuario());
        }
        return "save";
    }

    @PostMapping("/save")
    public String save(Usuario usuario){
        usuarioServiceAPI.save(usuario);
        return "redirect:/";
    }

    @GetMapping("delete/{id}")
    public String delete(@PathVariable("id") Long id){
        usuarioServiceAPI.delete(id);
        return "redirect:/";
    }
}
