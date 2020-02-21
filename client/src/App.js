import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styles from './styles';
import MinorIcons from './minoricons';
import { Meaning, Desc } from './Descriptors';
import Blurb from './Blurb';

class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      card: {},
      minors: {
        swords: Array( 14 ).fill( false ),
        pentacles: Array( 14 ).fill( false ),
        cups: Array( 14 ).fill( false ),
        wands: Array( 14 ).fill( false )
      },
      timers: [],
      classes: styles,
    }
  }

  removeIcons = () => {
    let timers = this.state.timers;
    console.log( timers );
    if ( timers.length ) {
      timers.forEach( timer => clearTimeout( timer ) );
      this.setState( { timers: [] } );
    }

    let minors = this.state.minors;
    Object.keys( minors ).forEach( ( suit ) => {
      for ( let i = 0; i < minors[suit].length; i++ ) {
        minors[suit][i] = false;
      }
    } )

    this.setState( { minors: minors } );
  }

  getCard = () => {
    this.removeIcons();

    fetch( '/api/v1/cards/random' )
      .then( res => res.json() )
      .then( ( data ) => {
        this.setState( { card: data.cards[0] } );
        this.updateMinors();
      } )
      .catch( console.log );
  }

  updateMinors = () => {
    var card = this.state.card;
    if ( card.type === 'minor' ) {

      let suitName = card.suit;
      let count = card.value_int;

      let minors = this.state.minors;
      let suitStatus = this.state.minors[suitName];
      let timers = this.state.timers;
      for ( let i = 0; i < count; i++ ) {

        var wait = 1 + ( 200 * i );
        var timer = setTimeout( () => {
          suitStatus[i] = true;
          minors[suitName] = suitStatus;
          this.setState( { minors: minors } );
        }, wait );
        timers.push( timer );
      }
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.basic}>
        <Typography variant={'h2'} color={'secondary'}>Tarot Draw</Typography>
        <Grid container justify={'center'} spacing={2} className={classes.grid}>
          <Grid item>
            <Paper className={classes.cardStyles}>
              <Typography variant={'h5'} style={{ paddingTop: '10px' }}>
                {this.state.card.name}
              </Typography>
              <MinorIcons status={this.state.minors.swords} suit={'swords'} className={classes.icons} />
              <MinorIcons status={this.state.minors.cups} suit={'cups'} className={classes.icons} />
              <MinorIcons status={this.state.minors.pentacles} suit={'pentacles'} className={classes.icons} />
              <MinorIcons status={this.state.minors.wands} suit={'wands'} className={classes.icons} />
            </Paper>
            <Button color="primary" variant="contained" onClick={this.getCard}>Draw A Card</Button>
          </Grid>
          <Grid item className={classes.explanation}>
            <Meaning meaning={this.state.card.meaning_up} />
          </Grid>
        </Grid>
        <Blurb className={classes.blurb} />
      </Container>
    )
  }
}

export default withStyles( styles )( App );