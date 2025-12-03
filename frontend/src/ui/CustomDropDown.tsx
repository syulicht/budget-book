import { MenuItem, Select } from '@mui/material'

type Props = {
    menuItems: {value: number, name: string}[],
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
}

const CustomDropDown = (props: Props) => {
  return (
    <Select
    value={props.value}
    onChange={(e) => props.setValue(e.target.value)}
    >
        {props.menuItems.map(item => <MenuItem value={item.value}>{item.name}</MenuItem>)}
    </Select>
  )
}

export default CustomDropDown