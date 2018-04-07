import React from 'react';
import Carousel from 'nuka-carousel';

class ArtistsFeaturesCarousel extends React.Component {
  componentDidMount() {
    // solves nuka carousel bug where height of carousel is sometimes incorrect
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }

  render() {
    const slides = this.props.slides.map((slide, index) => {
      return <div key={index}>{slide}</div>;
    });

    return <Carousel style={{ marginBottom: '-40px' }}>{slides}</Carousel>;
  }
}

export default ArtistsFeaturesCarousel;
