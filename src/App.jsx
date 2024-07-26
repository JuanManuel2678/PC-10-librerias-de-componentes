import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ResponsiveAppBar from "./components/AppBar"
import OutlinedCard from "./components/Contem"
import QuiltedImageList from "./components/ImageList"



function App() {
 

  return (
    <div>
    <ResponsiveAppBar />
    <div className="mainContainer">

      <div className="imageList" >
      <QuiltedImageList />
      </div>
   
        <div className="infoContainer">
        <OutlinedCard />
        </div>
    </div>
    </div>
  )
}

export default App
