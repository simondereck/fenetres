import { Box, Typography, useMediaQuery, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SchoolIcon from "@mui/icons-material/School";
import React from "react";

const Estimation = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <div>
            <Box py={20} textAlign="center">
                <Typography variant="h2">Estimation Page</Typography>
            </Box>
        </div>
    );


};
export default Estimation;