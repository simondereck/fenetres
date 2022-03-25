 
import navbarNavigationsMobile from '../../data/navbarNavigationsMobile'
import { Accordion, Box } from '@mui/material'
import React, { FC, Fragment } from 'react'
import CustomCard from '../CustomCard'
import NavLink from '../../components/nav-link/NavLink' 
import FlexBox from '../FlexBox'
import { Span } from '../Typography'
import AccordionHeader from '../accordion/AccordionHeader'
  // component props interface
export interface GrocerySidenavProps {
  isFixed?: boolean
}

const AppSidenav: FC<GrocerySidenavProps> = ({ isFixed }) => {
  const renderChild = (childList: any[], type = 'parent') => {
    if (type === 'parent')
      return childList.map((item) => (
        <Fragment key={item.title}>
          <NavLink href={item.url} color="grey.700"  >
            <FlexBox>
              <Span ml="2rem" py={0.75} color="inherit" flex="1 1 0">
                {item.title}
              </Span>
            </FlexBox>
          </NavLink>

          {item.child && renderChild(item.child, 'child')}
        </Fragment>
      ))
    else
      return childList.map((item, ind) => (
        <NavLink href={item.url} color="grey.700" key={ind}  >
          <FlexBox key={item.title}>
            <Span ml="3rem" py={0.75} color="inherit" flex="1 1 0"> 
              {item.title}
            </Span>
          </FlexBox>
        </NavLink>
      ))
  }

  return (
    <CustomCard
      elevation={3}
      sx={{
        position: 'relative',
        p: '20px 20px 14px 24px',
        height: '100%',
        borderRadius: '0px',
        overflow: isFixed ? 'auto' : 'unset',
      }}
    >
      {navbarNavigationsMobile.map((item, ind) => {  
        return(
        <Box mb={1} color="grey.700" key={ind}>
          {item.child ? (
            <Accordion expanded>
              <AccordionHeader
                px={0}
                py={0.75}
                color="inherit"
                justifyContent="flex-start"
              >
                <Box flex="1 1 0">   
                <NavLink href={item.url} color="grey.700" key={ind}    >
                <FlexBox alignItems="center" flex="1 1 0"> 
                  <Span
                    color="inherit"
                    fontWeight="600"
                    mr={1.125}
                    ml={1.5}
                    flex="1 1 0"
                  >
                    {item.title}
                  </Span>
                </FlexBox>
                </NavLink>  
                </Box>
              </AccordionHeader>
              {item.child ? renderChild(item.child) : null}
            </Accordion>
          ) : (
            <NavLink href={item.url?item.url : ""} color="grey.700"  >
              <FlexBox py={0.75} color="inherit" key={item.title}> 
                <Span color="inherit" fontWeight="600" mr={1.125} flex="1 1 0">
                  {item.title}
                </Span>
              </FlexBox>
            </NavLink>
          )}
        </Box>)
      })}
    </CustomCard>
  )
}

export default AppSidenav
