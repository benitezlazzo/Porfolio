import Carousel from 'react-bootstrap/Carousel';

function Carru() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <div class="krru">
          <p> </p>
          <div class="krru">
            <img className="tamaño d-block w-100"
              src="https://res.cloudinary.com/dbq0h1f5w/image/upload/v1678803547/porfolio/63758adc3779c3000ed1db2e_ndoici.png" alt=""
            /><div class="krru">
              <p></p>
            </div>
          </div>
        </div>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div class="krru">
          <p> </p>
          <div class="krru">
            <img
              className="tamaño d-block w-100"
              src="https://res.cloudinary.com/dbq0h1f5w/image/upload/v1678803546/porfolio/6345b1d6be8abc000f4a886f_jhvcot.png"
              alt="Second slide"
            /><div class="krru">
              <p></p>
            </div>
          </div>
        </div>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div class="krru">
          <p> </p>
          <div class="krru">
            <img
              className=" d-block w-100"
              src="https://res.cloudinary.com/dbq0h1f5w/image/upload/v1678803546/porfolio/62cb04a100d7ef0024a88c3e_gnxkcs.png"
              alt="Third slide" />
            <div class="krru">
              <p></p>
            </div>
          </div>
        </div>
        <Carousel.Caption>
          <h3></h3>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carru;