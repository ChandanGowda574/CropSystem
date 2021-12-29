package com.usermanagement.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.usermanagement.model.UserModel;
@Repository
public interface UserManagementRepo  extends MongoRepository<UserModel, String>{

	

	UserModel findByUserName(String userName);

	boolean existsByUserName(String userName);

	boolean existsByEmail(String email);
}
