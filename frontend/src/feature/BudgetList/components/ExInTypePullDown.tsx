import { MenuItem, Select, useTheme } from "@mui/material"

const ExInTypePullDown = () => {
    const theme = useTheme();
    return (
    <Select sx={{
        // '&.MuiSelect-select': {
        //     bgcolor: theme.palette.customBackground.ui,
        //     border: 'solid 2px',
        //     paddingY: theme.spacing(2),
        //     paddingLeft: theme.spacing(4),
        //     borderColor: theme.palette.border.main,
        //     fontSize: theme.typography.p.pc.fontSize,
        //     minHeight: theme.typography.p.pc.fontSize,
        //     lineHeight: theme.typography.p.pc.lineHeight
        // }
    }} 
    value={-1}>
        <MenuItem value={-1}>収入・支出</MenuItem>
        <MenuItem value={1}>収入</MenuItem>
        <MenuItem value={2}>支出</MenuItem>
    </Select>
    )
}

export default ExInTypePullDown