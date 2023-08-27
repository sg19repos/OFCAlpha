import axios from "axios";

const MakeAPICall = {
  getLocationDetails: function(locationInputParams) {
    const { location, url } = locationInputParams;
    return axios.get(url + location);
  }
};

export default MakeAPICall;
