import cups from './images/cups.svg';
import swords from './images/swords.svg';
import wands from './images/wands.svg';
import pentacles from './images/pentacles.svg';

const getIconUrl = ( suit ) => {
  switch ( suit ) {
    case 'pentacles':
      return pentacles;
    case 'swords':
      return swords;
    case 'cups':
      return cups;
    case 'wands':
      return wands;
    default:
      return '';
  }
}

const getIconStyles = ( suit ) => {
  switch ( suit ) {
    case 'wands':
      return { transform: 'rotate(30deg' };
    case 'swords':
      return { paddingTop: '.2rem' }
    default:
      return {}
  }
}

export { getIconUrl, getIconStyles }