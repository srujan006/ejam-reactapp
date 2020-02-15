import axios from "axios";

export function getCityDetails(data) {
  let baseURL = "http://localhost:3003";
  const url = baseURL + "/api/ejam-nodejs/city-details";
  const method = "POST";
  console.log("action",data,url);

  return async (dispatch) => {

    const headers = {
      "Content-Type": "application/json"
    };
    try{


      const res = await axios({ url, method, headers, data });

      const body = res && res.data ? res.data : {};
      dispatch({
        type: "SINGLE_CITY",
        body
      });
      return res;
    }catch(error){
      let errObj = { error: error.message };
      //       errObj.status = error.response ? error.response.status : null;
      //
      return errObj;
    }
  };
}
