const styles = theme => ({
  basic: {
    textAlign: 'center'
  },
  grid: {
    margin: '2rem auto 1rem auto',
  },
  meaning: {
    alignSelf: 'end'
  },
  cardStyles: {
    height: '300px',
    width: '240px',
    position: 'relative',
    marginBottom: '10px'
  },
  icons: {
    position: 'absolute',
    paddingTop: '1rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    '& div': {
      flex: '0 0 20%',
      height: '60px',
      '& img': {
        maxWidth: '100%',
        maxHeight: '100%',
        padding: '0 .2rem'
      }
    }
  },
  explanation: {
    width: '400px',
    textAlign: 'left'
  },
  blurb: {
    width: '80%',
    margin: '0 auto',
    marginTop: '2rem',
    [theme.breakpoints.up('md')]: {
      width: '60%'
    }
  }
})

export default styles;