import createCache from '@emotion/cache';

export const ckCache = createCache({
  key: 'ck',
  // Only prefix the following style properties
  prefix: key => {
    switch (key) {
      case 'appearance':
      case 'box-decoration-break':
      case 'mask-border-outset':
      case 'mask-border-repeat':
      case 'mask-border-slice':
      case 'mask-border-source':
      case 'mask-border-width':
      case 'mask-border':
      case 'mask-clip':
      case 'mask-composite':
      case 'mask-image':
      case 'mask-origin':
      case 'mask-position':
      case 'mask-repeat':
      case 'mask-size':
      case 'mask':
      case 'text-emphasis-color':
      case 'text-emphasis-position':
      case 'text-emphasis-style':
      case 'text-emphasis':
        return true;
      default:
        return false;
    }
  },
});
