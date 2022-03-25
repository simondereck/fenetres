import { Card, CardProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'

type CustomCardProps = {
  hoverEffect?: boolean
}

const CustomCard = styled<React.FC<CustomCardProps & CardProps>>(
  ({ hoverEffect, children, ...rest }) => <Card {...rest}>{children}</Card>
)<CustomCardProps>(({ theme, hoverEffect }) => ({
  borderRadius: '8px',
  overflow: 'unset',
  transition: 'all 250ms ease-in-out',
  '&:hover': {
    boxShadow: hoverEffect ? theme.shadows[3] : '',
  },
}))

CustomCard.defaultProps = {
  hoverEffect: false,
}

export default CustomCard
