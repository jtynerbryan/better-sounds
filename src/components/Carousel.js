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
    return (
      <Carousel autoplay={true}>
        {slides}
      </Carousel>
    )
  }
}

export default ArtistsFeaturesCarousel
