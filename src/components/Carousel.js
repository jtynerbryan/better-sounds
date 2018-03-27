import React from 'react';
import Carousel from 'nuka-carousel';

class ArtistsFeaturesCarousel extends React.Component {

  render() {

    const slides = this.props.slides.map((slide, index) => {
      return (
        <div key={index}>
          {slide}
        </div>
      )
    })

    const settings = {
      autoplay: false
    }
    return (
      <Carousel {...settings} style={{marginBottom: '-40px'}}>
        {slides}
      </Carousel>
    )
  }
}

export default ArtistsFeaturesCarousel
