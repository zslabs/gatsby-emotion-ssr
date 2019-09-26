export const globalStyles = theme => [
  {
    // 1. Normalize default `font-family` and set `font-size` to support `rem` units
    // 2. Prevents iOS text size adjust after orientation change, without disabling user zoom
    // 3. Setting @viewport causes scrollbars to overlap content in IE11 and Edge, so we force a non-overlapping, non-auto-hiding scrollbar to counteract.
    // 4. Style
    // 5. Text rendering defaults
    // 6. border-box by default
    // 7. Change the default tap highlight to be completely transparent in iOS.
    html: {
      // 1
      fontFamily: 'Helvetica',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
      // 2
      textSizeAdjust: '100%',
      // 3
      msOverflowStyle: 'scrollbar',
      // 4
      background: '#fff',
      color: '#333',
      // 5
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
      // 6
      boxSizing: 'border-box',
      // 7
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    },

    // Inherit 'border-box' down to sub-components
    '*': {
      boxSizing: 'inherit',

      '&::before, &::after': {
        boxSizing: 'inherit',
      },
    },

    // Remove default margin
    body: {
      margin: 0,
    },
  }
];
