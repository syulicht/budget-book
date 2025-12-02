import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./route/routeTree";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const router = createRouter({ routeTree });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
    },
  }
});

const customTheme = createTheme({
  palette: {
    primary: {main: '#22C55E'},
    secondary: {main: '#8B5CF6'},
    info: {main: '#38BDF8'},
    error: {main: '#F75555'},
    text: {primary: '#DDDDDD', secondary: '#BBBBBB'},
    border: {main: '#404040'},
    hover: {main: '#3A3A3A'},
    customBackground: {default: '#1F1F1F', ui: '#333333', section: '#2A2A2A', stripe: '#2F2F2F'},
  },
  lineHeight: '100%',
  spacing: (num: number) => `${num * 4}px`,
  typography: {
    fontFamily: 'Inter, NotoSans JP',
    h3: {
      pc: {
        fontSize: '18px',
        lineHeight: '100%',
      },
      sp: {
        fontSize: '14px',
        lineHeight: '100%',
      }
    },
    p: {
      pc: {
        fontSize: '14px',
        lineHeight: '100%',
      },
      sp: {
        fontSize: '12px',
        lineHeight: '100%',
      }
    },
    span: {
      pc: {
        fontSize: '12px',
        lineHeight: '100%',
      },
      sp: {
        fontSize: '10px',
        lineHeight: '100%',
      }
    },
  },
  shape: {
    pc: '6px',
    sp: '4px'
  }
});

const App = () => {    
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App