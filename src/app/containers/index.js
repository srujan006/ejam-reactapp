import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button,Row,Col,Radio, Card } from "antd";
import { getCityDetails } from '../actions/getCityDetails.js';

import DisplayCityDetails from './displayCityDetails';


function MainContainer(props){
  const cityDetails = useSelector(state => state);
  const dispatch = useDispatch();
  const {data}  = cityDetails.cityDetails ;
  // console.log("resufadf................",cityDetails,dispatch)
  let [ cityId,setCityId] = useState(0);
  const cities = [
    {
      name:"Chicago",
      woeid:2379574
    },
    {
      name: "New york",
      woeid: 2459115
    },
    {
      name: "Los Angeles",
      woeid: 2442047
    },
    {
      name: "San Francisco",
      woeid: 2487956
    }
  ]

  const onChange = function(e) {
    console.log(`checked =${e.target.value}`);
    setCityId(e.target.value);
  }
  const displayCityNames = function (cities){
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (<Radio.Group onChange={onChange} value={cityId} >
      {cities.map(city=>{
      return (
        <Col span={24}>
          <Radio  style={radioStyle} value={city.woeid}>{city.name}</Radio>
        </Col>)
      })}
      </Radio.Group>);

  }
  const handleClick =async  function(){
    try{
      await dispatch(getCityDetails({woeid:cityId}));
    }catch(err){
      console.log(err);
    }

  }

  return (
    <div style={{
        background: '#ECECEC',
        padding:"30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems:"center"
 }}>


        <Card  title="Pick a city" bordered={false} style={{ width: '20%'}}>
          <Row>
            {displayCityNames(cities)}
          </Row>
          <Button  type="primary" style={{ width: '100%', alignItems:"center"}} onClick={handleClick}>Submit</Button>
        </Card>


      {/*
        */}
      {
        data &&   <DisplayCityDetails />
      }

    </div>
  );
}

export default MainContainer;
