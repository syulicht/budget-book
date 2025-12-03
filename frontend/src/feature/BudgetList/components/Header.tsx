import { Box, Typography, useTheme } from "@mui/material"
import CustomDropDown from "../../../ui/CustomDropDown";
import { useSetExInTypes } from "../hooks/useSetExInTypes";

const Header = () => {
  const {value: value, setValue: setValue, exInTypes: exInTypes} = useSetExInTypes();
  const theme = useTheme();
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
          flexDirection: 'column',
          gap: theme.spacing(4)
        }}>
          <CustomDropDown value={value} setValue={setValue} menuItems={exInTypes} />
        </Box>
    </Box>
  )
}

export default Header