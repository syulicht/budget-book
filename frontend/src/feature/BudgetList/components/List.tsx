import { CheckBox, Delete, Edit } from '@mui/icons-material';
import {Avatar, Box, ListItem, List as MuiList, Typography, useTheme} from '@mui/material';
import Loading from '../../../ui/Loading';
import { useFetchBudgetData } from '../../../hooks/useFetchBudgetData';

interface Props {
    exInType: number,
    master: number
}

const start = new Date('1970/01/01');
const end = new Date('2100/01/01');

const List = (props: Props) => {
    const theme = useTheme();
    const { data, isLoading } = useFetchBudgetData(start, end, props.exInType, props.master);
    if(isLoading) return <Loading />;

    return (
    <MuiList
        subheader={
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: theme.spacing(4),
                alignItems: 'center',
                borderBottom: 'solid 2px',
                borderColor: theme.palette.border.main
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: theme.spacing(10),                    
                }}>
                    <CheckBox sx={{'& .MuiSvgIcon-root': {fontSize: theme.typography.p.pc.fontSize}}} />
                    <Typography sx={{width: 80, display: 'flex', justifyContent: 'center', lineHeight: theme.typography.p.pc.lineHeight}}>日付</Typography>
                    <Typography sx={{width: 500, display: 'flex', justifyContent: 'center', lineHeight: theme.typography.p.pc.lineHeight}}>内容</Typography>
                    <Typography sx={{width: 102, display: 'flex', justifyContent: 'center', lineHeight: theme.typography.p.pc.lineHeight}}>金額</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: theme.spacing(4)               
                }}>
                    <Edit sx={{fontSize: theme.typography.p.pc.fontSize}} />
                    <Delete sx={{fontSize: theme.typography.p.pc.fontSize}} />
                </Box>
            </Box>
        }
    >
        {data && data.map(budget => (
            <ListItem sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: theme.spacing(4),
                alignItems: 'center',
                borderBottom: 'solid 2px',
                borderColor: theme.palette.border.main
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: theme.spacing(10),                    
                }}>
                    <CheckBox sx={{'& .MuiSvgIcon-root': {fontSize: theme.typography.p.pc.fontSize}}} />
                    <Typography sx={{width: 80, display: 'flex', justifyContent: 'center', lineHeight: theme.typography.p.pc.lineHeight}}>{budget.date}</Typography>
                    <Box sx={{width: 500, display: 'flex', justifyContent: 'start', height: theme.typography.p.pc.lineHeight}}>
                        <Avatar src={`public/icons/${budget.master.id}.svg`} alt={'NO'} variant="square"/>
                        <Typography component={'p'}>{budget.master.name}</Typography>
                        {budget.detail && <Typography component={'span'}>{budget.detail}</Typography>}
                    </Box>
                    <Typography sx={{width: 102, display: 'flex', justifyContent: 'center', lineHeight: theme.typography.p.pc.lineHeight}}>{budget.money}</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: theme.spacing(4)               
                }}>
                    <Edit sx={{fontSize: theme.typography.p.pc.fontSize}} />
                    <Delete sx={{fontSize: theme.typography.p.pc.fontSize}} />
                </Box>
            </ListItem>
        ))}
    </MuiList>
    )
}

export default List