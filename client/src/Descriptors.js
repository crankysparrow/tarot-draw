import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

const Meaning = ( props ) => {
  if ( props.meaning ) {
    return (
      <div>
        <Typography variant={'h4'} color={'secondary'}>
          Meaning
      </Typography>
        <Typography>
          {props.meaning}
        </Typography>
      </div>
    );
  } else {
    return null;
  }
}

const Desc = ( props ) => {

  if ( props.desc ) {
    return (
      <div>
        <Typography variant={'h5'}
          color={'secondary'}>
          Description
        </Typography>
        <Typography variant={'body2'}>
          {props.desc}
        </Typography>
      </div>
    );
  } else {
    return null;
  }
}

export { Meaning, Desc }