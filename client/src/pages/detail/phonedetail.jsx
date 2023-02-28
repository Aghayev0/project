import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail.scss";

const Phonedetail = () => {
  const [id, setId] = useState([]);
  const { _id } = useParams();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:5522/api/mobiles/get/${_id}`).then((res) => {
      setId(res.data);
      setLoading(false);
    }, 3000);
  }, []);
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div class='spinner-border text-primary' role='status'>
          <span class='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className='detail'>
      <img className='detailimg' src={id.image} alt='' />
      <div className='details'>
        <p>
          <span>Name :</span> {id.name}
        </p>
        <p>
          <span>Display : </span>
          {id.display}
        </p>
        <p className='detailsp'>
          <span>Title : </span>
          {id.title}
        </p>
        <p>
          <span>Release Date : </span>
          {id.releasedate}
        </p>
        <p>
          <span>CPU : </span>
          {id.cpu}
        </p>
        <p>
          <span>Price : </span>
          {id.price}
        </p>
        <p>
          <span>battery : </span>
          {id.battery}
        </p>
        <p>
          <span>camera : </span>
          {id.camera}
        </p>
      </div>
    </div>
  );
};

export default Phonedetail;
