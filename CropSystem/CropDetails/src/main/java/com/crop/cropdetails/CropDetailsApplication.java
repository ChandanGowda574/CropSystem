package com.crop.cropdetails;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import springfox.documentation.swagger2.annotations.EnableSwagger2;
@EnableMongoRepositories
@EnableEurekaClient
@EnableSwagger2
@SpringBootApplication
public class CropDetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(CropDetailsApplication.class, args);
	}

}
