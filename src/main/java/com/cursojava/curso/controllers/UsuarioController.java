package com.cursojava.curso.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cursojava.curso.dao.UsuarioDao;
import com.cursojava.curso.models.Usuario;

@RestController
public class UsuarioController {
	
	@Autowired
	private UsuarioDao usuarioDao;
	
	@RequestMapping(value = "users")
	public List<Usuario> getUsuarios(){
		return usuarioDao.getUsuarios();

	}
	
	@RequestMapping(value = "user/{id}", method = RequestMethod.GET)
	public Usuario getUser(@PathVariable Long id){
		Usuario user = new Usuario();
		
		
		user.setId(id);
		user.setName("Diana");
		user.setLastName("Mtz");
		user.setEmail("diana.campos@");
		user.setPhoneNumber(3322211);
		
		return user;	
	}
	
	
	
	public Usuario modificar(){
		Usuario user = new Usuario();
		
		
		return user;
		
	}
	
	
	public Usuario buscar(){
		Usuario user = new Usuario();
		
		
		return user;
		
	}
	
	@RequestMapping(value = "user/{id}", method = RequestMethod.DELETE)
	public void eliminar(@PathVariable Long id){
		usuarioDao.eliminar(id);
		
	}
	

	
	
}
