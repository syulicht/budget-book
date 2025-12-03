import { Box, useTheme } from "@mui/material"
import Header from "./components/Header";

const BudgetList = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      bgcolor: theme.palette.customBackground.section,
      gap: theme.spacing(4),
      padding: theme.spacing(10)
    }}>
      <Header />
    </Box>
  )
}

export default BudgetList