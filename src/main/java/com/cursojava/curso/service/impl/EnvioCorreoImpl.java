package com.cursojava.curso.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EnvioCorreoImpl {

    @Autowired
    private JavaMailSender mailSender;

    public void enviarCorreo(String destino, String asunto, String contenido) {

        SimpleMailMessage email = new SimpleMailMessage();
        email.setFrom("soportesistemaelectrico@gmail.com");
        email.setTo(destino);
        email.setSubject(asunto);
        email.setText(contenido);

        mailSender.send(email);

        System.out.println("Correo enviado exitosamente...");
    }
}