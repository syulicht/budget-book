import { Avatar, Box, List, ListItemButton, Typography, useTheme } from "@mui/material"
import DashboardIcon from "@mui/icons-material/Dashboard"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SettingsIcon from '@mui/icons-material/Settings';
import type { UserInfo } from "../types/types";
import { useNavigate } from "@tanstack/react-router";

interface Props {
    user: UserInfo
}

const Sidebar = (props: Props) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const menuItems = [
        {icon: <DashboardIcon sx={{fontSize: theme.typography.h3.pc.fontSize}} />, name: 'ダッシュボード', path: 'dashboard'},
        {icon: <AttachMoneyIcon sx={{fontSize: theme.typography.h3.pc.fontSize}} />, name: '収支管理', path: 'budgets'},
        {icon: <EqualizerIcon sx={{fontSize: theme.typography.h3.pc.fontSize}} />, name: '分析表示', path: 'data'},
        {icon: <SettingsIcon sx={{fontSize: theme.typography.h3.pc.fontSize}} />, name: 'マスタ管理', path: 'master'}
    ]
    return (
        <List sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(1),
            padding: theme.spacing(2),
            paddingTop: theme.spacing(6),
            flexGrow: 0,
            width: '200px'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: theme.spacing(4),
                paddingX: theme.spacing(2),
                paddingY: theme.spacing(4),
                alignItems: 'center',
                width: '100%',
                borderBottom: 'solid 2px',
                borderColor: theme.palette.border.main
            }}>
                <Avatar src={"https://avatars.githubusercontent.com/u/136669051?v=4"} alt={props.user.name} />
                <Typography component={'h3'}>
                    {props.user.name}
                </Typography>
            </Box>
            {
                menuItems.map(item => (
                    <ListItemButton sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: theme.spacing(4),
                        padding: theme.spacing(2),
                        borderRadius: theme.shape.pc,
                        flexGrow: 0,
                        alignSelf: 'flex-start',        
                        width: '100%'
                    }}
                    onClick={() => navigate({to: item.path, from: ''})}
                    >
                        {item.icon}
                        <Typography sx={{
                            ...theme.typography.p.pc
                        }}
                        component={'p'}>{item.name}</Typography>
                    </ListItemButton>
                ))
            }
        </List>
    )
}

export default Sidebar