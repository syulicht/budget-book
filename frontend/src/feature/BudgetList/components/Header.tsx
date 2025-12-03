import { Box, Typography, useTheme } from "@mui/material"
import CustomDropDown from "../../../ui/CustomDropDown";
import { useManageBudget } from "../hooks/useManageBudget";
import Loading from "../../../ui/Loading";

const exInTypesNames = [{value: -1, name: '収入・支出'}, {value: 0, name: '収入'}, {value: 1, name: '支出'}]

const Header = () => {
  const {masters, masterIsLoading, exInType, setExInType, setMaster, master} = useManageBudget();
  const theme = useTheme();

  if(masterIsLoading) return <Loading />;

  return (
    <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        <Typography component={'h3'}>収支管理</Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: theme.spacing(4)
        }}>
          <CustomDropDown value={exInType} setValue={setExInType} menuItems={exInTypesNames} />
          <CustomDropDown value={master} setValue={setMaster} menuItems={masters} />
        </Box>
    </Box>
  )
}

export default Header