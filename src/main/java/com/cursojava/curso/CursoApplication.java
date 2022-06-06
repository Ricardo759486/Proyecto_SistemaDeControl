package com.cursojava.curso;

import com.cursojava.curso.controllers.AuditoriaRestController;
import com.cursojava.curso.model.Auditoria;
import com.cursojava.curso.service.impl.EnvioCorreoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class CursoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CursoApplication.class, args);
		/*AuditoriaRestController a = new AuditoriaRestController();
		Auditoria au = new Auditoria();
		au.setIpUsuario("1234");
		au.setOperacionCrud("CU");
		au.setTabla("XX");
		a.save(au);*/
	}
}
