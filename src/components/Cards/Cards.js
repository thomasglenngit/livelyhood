import React from 'react';
import Card from './CardUI';
// import img1 from './assets/img';
// import img2 from './assets/img';
// import img3 from './assets/img';



export class Cards extends React.Component {

  render() {
    return (
      <div className="container-fluid.d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card />
            {/* <Card imgsrc={img1} title='Console'/> */}
          </div>
          <div className="col-md-4">
            <Card />
            {/* <Card imgsrc={img2} title='Playground'/> */}
          </div>
          <div className="col-md-4">
            <Card />
            {/* <Card imgsrc={img3} 'title='Adventure'/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;