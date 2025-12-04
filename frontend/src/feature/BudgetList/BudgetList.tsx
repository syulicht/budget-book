import { Box, useTheme } from "@mui/material"
import Header from "./components/Header";
import { useManageBudget } from "./hooks/useManageBudget";
import List from "./components/List";

const BudgetList = () => {
  const {exInTypesNames, masters, masterIsLoading, exInType, setExInType, setMaster, master} = useManageBudget();
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
      <Header
        exInTypesNames={exInTypesNames}
        masters={masters}
        masterIsLoading={masterIsLoading}
        exInType={exInType}
        setExInType={setExInType}
        setMaster={setMaster}
        master={master}
      />
      <List exInType={exInType} master={master} />
    </Box>
  )
}

export default BudgetList