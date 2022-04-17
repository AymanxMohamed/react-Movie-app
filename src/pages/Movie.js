import React from 'react'
import { useParams } from "react-router-dom";

export default function Movie() {
  console.log(useParams().id);
  return <h1>Hello from movie</h1>
}
