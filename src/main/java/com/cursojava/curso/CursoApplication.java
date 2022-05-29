package com.cursojava.curso;

import com.cursojava.curso.service.impl.EnvioCorreoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class CursoApplication {
	@Autowired
	private EnvioCorreoImpl correoServ;

	public static void main(String[] args) {
		SpringApplication.run(CursoApplication.class, args);
	}

	@EventListener(ApplicationReadyEvent.class)
	public void envioCorreo() {
		correoServ.enviarCorreo("dfmejiar@unbosque.edu.co", "Prueba Envio", "Bienvenido a la empresa");
	}
}
