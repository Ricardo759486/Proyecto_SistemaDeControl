package com.cursojava.curso.security;

import lombok.AllArgsConstructor;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
@AllArgsConstructor

public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    public void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf().disable()
                .authorizeRequests()
                .antMatchers("/Autenticacion/**").permitAll()
                .antMatchers("/Proveedor/**").permitAll()
                .antMatchers("/Cuadrilla/**").permitAll()
                .antMatchers("/MaterialCuadrilla/**").permitAll()
                .antMatchers("/Material/**").permitAll()
                .antMatchers("/OrdenTrabajo/**").permitAll()
                .antMatchers("/Rol/**").permitAll()
                .antMatchers("/Telefono/**").permitAll()
                .antMatchers("/TipoServicio/**").permitAll()
                .antMatchers("/TurnoTrabajo/**").permitAll()
                .antMatchers("/Cliente/**").permitAll()
                .antMatchers("/Parametro/**").permitAll()
                .antMatchers("/Document/**").permitAll()
                .antMatchers("/Auditoria/**").permitAll()
                .antMatchers("/Zona/**").permitAll()
                .antMatchers("/api/**").permitAll();;

    }
}
