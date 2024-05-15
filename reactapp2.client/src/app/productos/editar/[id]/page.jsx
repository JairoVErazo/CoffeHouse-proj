"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const page = ({ params }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/Productos/${params.id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  return <div>Editar</div>;
};

export default page;
