import React, { useState } from 'react'

export default function UseWindowSize() {
  const [size, setSize]=useState(`${window.innerHeight}*${window.innerWidth}`);
  window.addEventListener("resize", ()=>{
    setSize(`${window.innerHeight}*${window.innerWidth}`);
  })
  return [size, setSize];
}
