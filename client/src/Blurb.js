import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Blurb = ( props ) => {
  return (
    <div className={props.className}>
      <Typography color={'textSecondary'}> 
      <p>
        I developed this app as a way of experimenting with <Link href="https://material-ui.com/">Material UI</Link> and honing my data-fetching skills with ReactJS, while indulging my love of tarot and general witchiness.
      </p>
      <p>
        Tarot Draw uses this <Link href="https://github.com/ekelen/tarot-api">Tarot REST API</Link> as a submodule, modified slightly so that it can serve up this front-end app at the same time. 
      </p>
      <p>
        Check out my website at <Link href="http://michelleenos.com/">MichelleEnos.com</Link> or <Link href="https://github.com/crankysparrow/tarot-draw">view the GitHub repo</Link> for this project.
      </p>      
      </Typography>      
    </div>
  )
}

export default Blurb;