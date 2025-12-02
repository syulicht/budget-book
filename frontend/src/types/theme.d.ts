import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        primary: {main: string},
        secondary: {main: string},
        info: {main: string},
        error: {main: string},
        text: {primary: string, secondary: string}
        border: {main: string},
        hover: {main: string},
        customBackground: {default: string, ui: string, section: string, stripe: string}
    }

    interface PaletteOptions {
        primary: {main: string},
        secondary: {main: string},
        info: {main: string},
        error: {main: string},
        text: {primary: string, secondary: string}
        border: {main: string},
        hover: {main: string},
        customBackground: {default: string, ui: string, section: string, stripe: string}
    }
    
    interface Theme {
        palette: Palette,
        lineHeight: string
        spacing: (num: number) => string,
        typography: {
            h3: {
                sp: { fontSize: string, lineHeight: string },
                pc: { fontSize: string, lineHeight: string }    
            },
            p: {
                sp: { fontSize: string, lineHeight: string },
                pc: { fontSize: string, lineHeight: string }    
            },
            span: {
                sp: { fontSize: string, lineHeight: string },
                pc: { fontSize: string, lineHeight: string }    
            }
        },
        shape: {
            sp: string,
            pc: string
        }
    }

    interface ThemeOptions {
        palette: PaletteOptions,
        lineHeight: string,
        spacing: (num: number) => string,
        typography: {
            fontFamily: string,
            h3: {
                sp: { fontSize: string, lineHeight: string },
                pc: { fontSize: string, lineHeight: string }    
            },
            p: {
                sp: { fontSize: string, lineHeight: string },
                pc: { fontSize: string, lineHeight: string }    
            },
            span: {
                sp: { fontSize: string, lineHeight: string },
                pc: { fontSize: string, lineHeight: string }    
            }
        },
        shape: {
            sp: string,
            pc: string
        }
    }
}
