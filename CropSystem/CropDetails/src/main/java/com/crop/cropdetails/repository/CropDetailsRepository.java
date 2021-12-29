package com.crop.cropdetails.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.crop.cropdetails.model.CropDetails;
@Repository
public interface CropDetailsRepository extends MongoRepository<CropDetails,String>{

	Optional<CropDetails> findByCropName(String cropName);

	Optional<CropDetails> findByCropType(String cropType);

	

	
	

}
