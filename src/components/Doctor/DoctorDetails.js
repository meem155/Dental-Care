// import React from 'react';
import React, { useEffect, useState } from 'react';

import { Card } from 'react-bootstrap';
import './Doctor.css'

const DoctorDetails = (props) => {
  const { name, deg, ex, img } = props.doctor
  // const [monitor, setMonitor] = useState(null);
  // useEffect(() => {
  //   fetch("https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708")
  //     .then(res => res.json())
  //     .then(data => setMonitor(data));

  // }, [])
  // console.log(monitor)
  return (
    <div>

      <Card className="text-dark mb-5">
        <Card.Img src={img} alt="Card image" />
        <Card.ImgOverlay>
          <br />

          <Card.Title className="mt-5 text-dark"><h3><b>{name}</b></h3></Card.Title>
          <Card.Text>
            {ex}
          </Card.Text>
          <Card.Text ><b>{deg}</b></Card.Text>
        </Card.ImgOverlay>
      </Card>


    </div>
  );
};

export default DoctorDetails;