import React from 'react';
import { useSelector } from "react-redux";
import { Row,Col,Card } from "antd";


function DisplayCityDetails(){
  const cityDetails = useSelector(state => state);
  const {data={} }  = cityDetails.cityDetails ;
  let { location={}, current_observation={}, forecasts=[]} = data ;


  return (
    <div style={{ padding: '30px' }}>

    <Card  title="City Details" bordered={false} style={{ width: 600}}>

      <Row>
        <Col style={{ margin : "10px"}}>
          <h3>City</h3>
          {location.city},{location.country}
        </Col>

        <Col style={{ margin : "10px"}}>
        <h3>Condition</h3>
          {current_observation.condition && current_observation.condition.text}
        </Col>

        <Col style={{ margin : "10px"}}>
            <h3>Weather Forecast</h3>
          {
            forecasts.map(eachDay=>{
              return (
                  <p>{eachDay.day},{eachDay.text}</p>
              )
            })
          }
        </Col>

      </Row>
    </Card>
    </div>
  )
}

export default DisplayCityDetails;
