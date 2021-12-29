package com.usermanagement.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.usermanagement.model.UserModel;
import com.usermanagement.repository.UserManagementRepo;

import org.springframework.security.core.userdetails.User;
@Service
public class UserManagementService implements UserDetailsService {
	
	@Autowired
	private UserManagementRepo userManagementRepo;

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		UserModel foundUser = userManagementRepo.findByUserName(userName);
		if(foundUser==null) {
			return null;
		}
		return new User(foundUser.getUserName(), foundUser.getPass(), new ArrayList<>());
		
	}

	

	
}

