import { Link, styled } from '@mui/material' 
import clsx from 'clsx'  
import React, { AnchorHTMLAttributes } from 'react'
import { useLocation } from 'react-router-dom';

// component props interface
export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string,
  style?: React.CSSProperties,
  className?: string  
}
// styled component
const StyledLink = styled('a')<{ active_route?: string }>(
  ({ theme, active_route }) => ({
    position: 'relative',
    textDecoration : active_route === 'active' ? "none !important" : "none !important",
    color: active_route === 'active' ? theme.palette.primary.main : theme.palette.text.primary,
    borderBottom: active_route === 'active' ? ` solid ${theme.palette.primary.main}` : "none",
    transition: 'color 150ms ease-in-out',
    '&:hover': {
      color: `${theme.palette.primary.main} !important`,
    },
  })
)

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  style,
  className,
  ...props
}) => {
  const location = useLocation();
  const pathname   = location.pathname; 
  const checkRouteMatch = () => {
    if (href === '/') return pathname === href
    return pathname.includes(href)
  }
  // active route
  const currentRoute = checkRouteMatch()

  return ( 
      <StyledLink
        active_route={currentRoute ? 'active' : ''}
        className={clsx(className)}
        href={href}
        style={style}
        {...props}
      >
        {children}
      </StyledLink> 
  )
}

export default NavLink
