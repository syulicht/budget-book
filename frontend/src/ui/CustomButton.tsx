import { Button, useTheme } from "@mui/material"
import type { ReactElement } from "react";

type Props = {
    onClick: () => void,
    text: string,
    icon: ReactElement
}

const CustomButton = (props: Props) => {
    const theme = useTheme();
    return (
    <Button sx={{
            display: 'flex',
            gap: theme.spacing(2),
            paddingX: theme.spacing(4),
            paddingY: theme.spacing(3),
            border: 'solid 2px',
            borderColor: theme.palette.border.main,
            borderRadius: theme.shape.pc,
            bgcolor: theme.palette.customBackground.ui,
            color: theme.palette.text.primary
        }}
        onClick={props.onClick}
    >
            {props.icon}
            {props.text}
        </Button>
  )
}

export default CustomButton