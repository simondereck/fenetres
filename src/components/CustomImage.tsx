import { compose, display, spacing, styled } from '@mui/system'

const CustomImage = styled('img')(compose(spacing, display))

CustomImage.defaultProps = {
  display: 'block',
}

export default CustomImage

// compose,
// borders,
// display,
// flexbox,
// palette,
// positions,
// shadows,
// sizing,
// spacing,
// typography
