import { Avatar, Box, FormControlLabel, Modal, Radio, RadioGroup, TextField, Typography, useTheme } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from "react";
import { Add, Edit, ImportContacts } from "@mui/icons-material";
import CustomButton from "./CustomButton";

type Props = {
    masters: {value: number, name: string}[],
    open: boolean,
    handler: () => void
    type: 'add' | 'edit',
    close: () => void
}

interface FormData {
    date: dayjs.Dayjs,
    exOrInType: number,
    master: number,
    money: string
}

const BudgetFormModal = (props: Props) => {
    const theme = useTheme();
    const [formData, setFormData] = useState<FormData>({date: dayjs(), exOrInType: 0, master: props.masters[0].value, money: ''});
    const masterIcons = props.masters.map(master => ({
                                                        id: master.value, 
                                                        img: <Avatar src={`public/icons/${master.value}.svg`} alt={'NO'} variant="square"/>
                                                    }));
    const handleMoneyChange = (originalValue: string) => {
        const value = originalValue.replace(/[^0-9]/g, ''); // 数字以外削除
        setFormData(prev => ({...prev, money: value}));
    };
    return (
    <Modal
        open={props.open}
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        onClose={props.close}
    >
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingX: theme.spacing(10),
            paddingY: theme.spacing(8),
            gap: theme.spacing(8),
            bgcolor: theme.palette.customBackground.section,
            width: 540,
            border: 'none',
            outline: 'none',
            borderRadius: theme.shape.pc
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: theme.spacing(4)
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Typography component={'h3'} sx={{...theme.typography.h3.pc}}>金額入力</Typography>
                    <CustomButton onClick={() => props.handler()} icon={props.type === 'add' ? <Add />: <Edit />} text={props.type === 'add' ? '追加': '編集'} />
                </Box>
                <RadioGroup sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: theme.spacing(6)
                }}
                    defaultValue={formData.exOrInType}
                    value={formData.exOrInType}
                    onChange={(e) => setFormData(prev => ({...prev, exOrInType: Number(e.target.value)}))}
                >
                    <FormControlLabel sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: theme.spacing(2),
                        paddingY: theme.spacing(2),
                        margin: 0
                    }}
                        value={0} 
                        control={<Radio sx={{'& .MuiSVGIcon-root': {...theme.typography.p.pc}, width: 14, height: 14}} />} 
                        label={<Typography component={'p'} sx={{...theme.typography.p.pc}}>支出</Typography>} 
                    />
                    <FormControlLabel sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: theme.spacing(2),
                        paddingY: theme.spacing(2),
                        margin: 0
                    }}
                        value={1} 
                        control={<Radio sx={{'& .MuiSVGIcon-root': {...theme.typography.p.pc}, width: 14, height: 14}} />} 
                        label={<Typography component={'p'} sx={{...theme.typography.p.pc}}>収入</Typography>}
                    />
                </RadioGroup>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: theme.spacing(8)
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: theme.spacing(2)
                    }}>
                        <Typography component={'span'} sx={{...theme.typography.p.pc}}>日付</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={formData.date}
                                onChange={(e) => setFormData({...formData, date: e ?? dayjs()})}
                                sx={{
                                    ...theme.typography.p.pc,
                                    '& .MuiInputBase-root': {
                                        paddingY: theme.spacing(3),
                                        paddingX: theme.spacing(4),
                                        border: 'solid 2px',
                                        borderColor: theme.palette.border.main,
                                        borderRadius: theme.shape.pc
                                    },
                                    '& span': {
                                        ...theme.typography.p.pc
                                    },
                                    width: '160px',
                                    bgcolor: theme.palette.customBackground.ui
                                }}
                             />
                        </LocalizationProvider>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: theme.spacing(2)
                    }}>
                        <Typography component={'span'} sx={{...theme.typography.p.pc}}>金額</Typography>
                        <TextField sx={{
                            '& .MuiInputBase-input': {
                                paddingX: theme.spacing(4),
                                paddingY: theme.spacing(3),
                                border: 'solid 2px',
                                borderColor: theme.palette.border.main,
                                borderRadius: theme.shape.pc,                         
                            },
                            width: 160,
                            bgcolor: theme.palette.customBackground.ui,
                        }}
                        value={formData.money}
                        onChange={(e) => handleMoneyChange(e.target.value)}
                         />
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing(2),
                width: '100%'
            }}>
                <Typography component={'span'} sx={{...theme.typography.p.pc}}>メモ（備考）</Typography>
                <TextField sx={{
                    bgcolor: theme.palette.customBackground.ui,
                    '& .MuiInputBase-input': {
                        paddingX: theme.spacing(4),
                        paddingY: theme.spacing(3),
                        border: 'solid 2px',
                        borderColor: theme.palette.border.main,
                        borderRadius: theme.shape.pc
                    },
                }} />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing(2),
                width: '100%'
            }}>
                <Typography component={'span'} sx={{...theme.typography.p.pc}}>マスタ</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: theme.spacing(4),
                }}>
                    {props.masters.filter(master => master.value !== -1).map(master => (
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: theme.spacing(4),
                            padding: theme.spacing(2),
                            border: 'solid 2px',
                            borderColor: theme.palette.border.main,
                            borderRadius: theme.shape.pc,
                            '& .hover': {borderColor: theme.palette.primary.main} 
                        }}>
                            <Typography sx={{width: 120, textAlign: 'center'}}>{master.name}</Typography>
                            {masterIcons.find(icon => icon.id === master.value)?.img ?? <ImportContacts/>}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    </Modal>
    )
}

export default BudgetFormModal