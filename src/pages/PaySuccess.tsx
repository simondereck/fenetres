import { Box, Typography, useMediaQuery, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SchoolIcon from "@mui/icons-material/School";
import React from "react";

const PaySuccess = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <div>
            <Box py={20} textAlign="center">
                <Typography variant="h2">Votre paiement a bien été pris en compte.</Typography>
            </Box>
        </div>
    );


};
export default PaySuccess;