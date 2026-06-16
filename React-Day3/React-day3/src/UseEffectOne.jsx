import React, { useEffect, useState } from 'react'

const UseEffectOne = () => {

    const[count, setcount]=useState(0)
    const[countTwo, setcountTwo]=useState(0)

     console.log("render");

    // useEffect(()=>{
    //     //side effect 
    //  return ()=>{
    //    //clean-up/unmounting function 
    //  }
    // },[]) //dependency array

    useEffect(()=>{
    //   console.log("inside udeeffect");
    alert("button clicked",);
    },[count])

    const handlerclick=()=>{
        setcount(count +1)
    }
    const handlerclickTwo=()=>{
        setcountTwo(countTwo + 1 )
    }

  return (
    <>
    <div>UseEffectOne Example</div>
    <h1>Count:{count}</h1>
    <button onClick={handlerclick}>+</button>
    <h1>Count:{countTwo}</h1>
    <button onClick={handlerclickTwo}>+</button>
     
    </>
     )
}

export default UseEffectOne