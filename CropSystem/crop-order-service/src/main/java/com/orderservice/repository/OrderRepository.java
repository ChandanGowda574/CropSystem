package com.orderservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.orderservice.model.Orders;

public interface OrderRepository extends MongoRepository<Orders, Integer>{

	

	

}
