import axios from 'axios'

const CROPDETAILS_BASE_REST_API_URL = 'http://localhost:9000/api/crops';

class CropDetailsService{

    getAllCrops(){
        return axios.get(CROPDETAILS_BASE_REST_API_URL + '/findAllcropdetails')
    }

    addCrops(cropdetails){
        return axios.post(CROPDETAILS_BASE_REST_API_URL + '/add', cropdetails)
    }

    getCropsById(cropId){
        return axios.get(CROPDETAILS_BASE_REST_API_URL + '/' + cropId);
    }

    updateCrops(cropId, cropdetails){
        return axios.put(CROPDETAILS_BASE_REST_API_URL + '/update/' +cropId, cropdetails);
    }

    deleteCrops(cropId){
        return axios.delete(CROPDETAILS_BASE_REST_API_URL + '/delete/' + cropId);
    }
}

export default new CropDetailsService();