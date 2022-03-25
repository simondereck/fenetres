 
 
import { Link, styled } from '@material-ui/core' 
import React, { FC } from 'react'
import CustomCard from '../CustomCard'
import CustomImage from '../CustomImage'
import FlexBox from '../FlexBox'
import { Small, H2, Paragraph } from '../Typography'

// component props interface
interface CarouselCard3Props {
  heading?: string
  body?: string
}

// styled components
const ContentWrapper = styled(CustomCard)(({ theme }) => ({
  boxShadow: theme.shadows[4],
  borderRadius: '2px',
}))

const StyledFlexBox = styled(FlexBox)(() => ({
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
  paddingTop: '3rem',
}))

const StyledShopButton = styled(Small)(({ theme }) => ({
  fontWeight: 900,
  borderBottom: `2px solid ${theme.palette.primary.main}`,
  lineHeight: 1.6,
}))

const CarouselCard3: FC<CarouselCard3Props> = () => {
  return (
    <ContentWrapper>
      <StyledFlexBox>
        <H2 mb="0.5rem" textAlign="center" lineHeight={1.2}>
          Introducing New Winter Collection
        </H2>
        <Paragraph color="grey.600" textAlign="center" mb="1.5rem">
          Starting at $39 & save upto 40%
        </Paragraph>

        <Link href="/">
          <a>
            <StyledShopButton>SHOP NOW</StyledShopButton>
          </a>
        </Link>
      </StyledFlexBox>

      <CustomImage
        width="100%"
        src="/assets/images/products/chair-with-clothes.png"
        alt="shoes"
      />
    </ContentWrapper>
  )
}

export default CarouselCard3
