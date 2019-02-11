import React, { Component } from 'react';

import Slideshow from 'react-native-slideshow';

class WelcomeSlides extends Component {
  render() {
    return (
      <Slideshow 
        dataSource={[
          { url:'http://placeimg.com/640/480/any' },
          { url:'http://placeimg.com/640/480/any' },
          { url:'http://placeimg.com/640/480/any' }
      ]}/>
    );
  }
}

export default WelcomeSlides;