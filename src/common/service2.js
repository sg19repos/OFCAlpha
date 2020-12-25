import axios from "axios";

const MakeAPICall = {
  getLocationDetails: function(locationInputParams) {
    const { pincode, url } = locationInputParams;
    return axios.get(url + pincode);
  }
};

export default MakeAPICall;
