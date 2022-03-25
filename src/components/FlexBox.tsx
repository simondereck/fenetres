import { BoxProps, Box } from "@mui/material" 
 
const FlexBox: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box display="flex" {...props}>
    {children}
  </Box>
)

FlexBox.defaultProps = {
  display: 'flex',
}

export default FlexBox
