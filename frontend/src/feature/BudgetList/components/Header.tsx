import { Box, Typography, useTheme } from "@mui/material"
import CustomDropDown from "../../../ui/CustomDropDown";
import Loading from "../../../ui/Loading";
import CustomButton from "../../../ui/CustomButton";
import { Add } from "@mui/icons-material";

interface Props {
  exInTypesNames: {value: number, name: string}[],
  masters: {value: number, name: string}[], 
  masterIsLoading: boolean, 
  exInType: number, 
  setExInType:  React.Dispatch<React.SetStateAction<number>>, 
  setMaster:  React.Dispatch<React.SetStateAction<number>>, 
  master: number,
  addButtonHandler: () => void
}

const Header = (props: Props) => {
  const theme = useTheme();

  if(props.masterIsLoading) return <Loading />;

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
          <CustomDropDown value={props.exInType} setValue={props.setExInType} menuItems={props.exInTypesNames} />
          <CustomDropDown value={props.master} setValue={props.setMaster} menuItems={props.masters} />
          <CustomButton text="追加" onClick={props.addButtonHandler} icon={<Add />}/>
        </Box>
    </Box>
  )
}

export default Header