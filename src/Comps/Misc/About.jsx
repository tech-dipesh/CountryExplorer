import React from 'react'
import style from "../Header/header.module.css"
import { Link, useParams } from 'react-router'
export default function About() {
  const getUrl=useParams();
  console.log(getUrl);
  return (
    <>
      <h1>Hello World friends, this is the about page.</h1>
      <h4>You can explore more about the about page on here.</h4>
      {/* <a href="/home"><button id={style.about}>Go to Homepage</button></a> */}
      <Link to='/home' id={style.about}>Go To Homepage</Link>
    </>
  )
}
