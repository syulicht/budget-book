import { Box, useTheme } from "@mui/material"
import Header from "./components/Header";
import { useManageBudget } from "./hooks/useManageBudget";
import List from "./components/List";
import BudgetFormModal from "../../ui/BudgetFormModal";
import { useState } from "react";

const BudgetList = () => {
  const {exInTypesNames, masters, masterIsLoading, exInType, setExInType, setMaster, master} = useManageBudget();
  const theme = useTheme();

  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

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
        addButtonHandler={() => {if(!editModalOpen) setAddModalOpen(true)}}
      />
      <List exInType={exInType} master={master} />
      <BudgetFormModal masters={masters} open={addModalOpen} close={() => setAddModalOpen(false)} type={'add'} handler={() => {}} />
      <BudgetFormModal masters={masters} open={editModalOpen} close={() => setEditModalOpen(false)} type={'edit'} handler={() => {}} />
    </Box>
  )
}

export default BudgetList