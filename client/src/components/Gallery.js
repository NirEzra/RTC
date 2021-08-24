import React from 'react'
import "../style/Gallery.css"




export default function Gallery() {
 
  return (
      <>
     
      
    <div className="galleryContainer">
    <div className="titlee">
    <h1>Gallery</h1>
    </div>
<div className="galleryInnner">

<div className="itemDiv">
<h2>Maps</h2>
<img src="../pictures/products/maps/blackgold/bg01.jpg"></img>
</div>


<div className="itemDiv">
<h2>Napkins</h2>
<img src="../pictures/products/napkins/blacksilver/nap-bs1.jpg"></img>
</div>

</div>
    </div>
    </>
  );
}


