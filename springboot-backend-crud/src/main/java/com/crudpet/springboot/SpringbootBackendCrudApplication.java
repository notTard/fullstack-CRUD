package com.crudpet.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.annotation.ComponentScan;

@EnableAutoConfiguration
@SpringBootApplication
//@ComponentScan("com.crudpet.controller" + "com.crudpet.repository"+"com.crudpet.model")
public class SpringbootBackendCrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendCrudApplication.class, args);
	}

}
