import { Box } from "@mui/material";
import { Outlet } from "@tanstack/react-router";
import Sidebar from "../ui/Sidebar";
import { useFetchUserInfo } from "../hooks/useFetchUserInfo";
import { useTheme } from "@mui/material/styles";
import Loading from "../ui/Loading";
import NoData from "../ui/NoData";

const AuthenticatedLayout = () => {
    const { data, isLoading } = useFetchUserInfo();
    const theme = useTheme();
    if(isLoading) return <Loading />
    if(!data) return <NoData />
    return (
    <Box sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        background: theme.palette.customBackground.default
    }}>
        <Sidebar user={data} />
        <Outlet />
    </Box>
    )
}

export default AuthenticatedLayout;