import { CheckBox, Delete, Edit } from '@mui/icons-material';
import {Box, List as MuiList, Typography, useTheme} from '@mui/material';
import Loading from '../../../ui/Loading';
import { useFetchBudgetData } from '../hooks/useFetchBudgetData';

interface Props {
    exInType: number,
    master: number
}
const List = (props: Props) => {
    const theme = useTheme();
    const { data, isLoading } = useFetchBudgetData(props.exInType, props.master);
    if(isLoading) return <Loading />;

    console.log(data);
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
    </MuiList>
    )
}

export default List