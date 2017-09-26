import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderExampleText = () => (
  <div>
  <Segment>
    <Dimmer active>
      <Loader size='huge'>Loading</Loader>
    </Dimmer>

    <Image src='/assets/images/wireframe/short-paragraph.png' />
    <Image src='/assets/images/wireframe/short-paragraph.png' />
    <Image src='/assets/images/wireframe/short-paragraph.png' />
  </Segment>
  </div>
)

export default LoaderExampleText
