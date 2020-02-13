import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import Container from '@material-ui/core/Container';
import { getIconStyles, getIconUrl } from './iconutils';

const MinorIcons = ( props ) => {
  var suit = props.suit;
  var iconList = [];

  for ( let i = 0; i < props.status.length; i++ ) {
    iconList.push(
      <Zoom in={props.status[i]}
        timeout={{
          enter: 300,
          exit: 0
        }}
        key={i}
        exit={false}
      >
        <div>
          <img src={getIconUrl( suit )}
            style={getIconStyles( suit )}
          />
        </div>
      </Zoom>
    );
  }
  return (
    <Container className={props.className}>
      {iconList}
    </Container>
  );
}

export default MinorIcons;