
// import React from 'react'
// import Parent from './Parent'

// const App = () => {
//   return (
//     <div>
//       <Parent></Parent>
//     </div>
//   )
// }

// export default App
import React from 'react';
import MovieProvider from './MovieProvider';
import MovieList from './MovieList';

const App = () => {
  return (
    <MovieProvider>
      <MovieList />
    </MovieProvider>
  );
}

export default App; 

// manus:
// tell me the usecases of these librabries
// 2 component
// trasition an Animation
// moncy
// google lens , scan 
// threejs interactive
// bruno simon
// eyes.nasa.gov 
// craftwork.design
// one page
// gsap -> frontend
// mareshKhatri
// framer motin react
// radix UI
// reactbits.dev
// flowing menu