import React from 'react'
import Child from './Child';

const Parent = () => {
    const name="yashika";
    const property="10floor building"
  return (
    <>
     <div>Parent</div>
     <h1>{name}</h1>
     <Child property={property}/>
    </>
    
  )
}

export default Parent