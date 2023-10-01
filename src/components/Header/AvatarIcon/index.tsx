import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../../providers/login';
import { stringAvatar } from '../../../utils';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Divider, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LogoutIcon from '@mui/icons-material/Logout';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const AvatarIcon = () => {
    const { logOut, currentloggedUserType } = useLogin();
    const navigate = useNavigate();

    const accountType = {
        doctor: 'Profissional de saúde',
        attendant: 'Atendente',
        admin: 'Admin',
    };

    const userInfo = localStorage.getItem('@UserInfo') && JSON.parse(localStorage.getItem('@UserInfo') || '');
    const userName = userInfo ? (userInfo.nome || 'user') : 'Anônimo';

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null,
    );

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const toHome = () => {
        navigate('/');
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Configurações">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={userName} {...stringAvatar(userName)} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem disabled style={{ opacity: 0.8 }}>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText>Usuário: {userName}</ListItemText>
                </MenuItem>
                {currentloggedUserType ? (
                    <MenuItem disabled style={{ opacity: 0.8 }}>
                        <ListItemIcon>
                            <VerifiedUserIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Conta: {accountType[currentloggedUserType]}
                        </ListItemText>
                    </MenuItem>
                ) : null}
                {currentloggedUserType !== 'doctor' && (
                    <MenuItem disabled style={{ opacity: 0.8 }}>
                        <ListItemIcon>
                            <AttachMoneyIcon />
                        </ListItemIcon>
                        <ListItemText>Caixa do dia R$:40,00</ListItemText>
                    </MenuItem>
                )}
                <Divider />
                <MenuItem onClick={() => logOut(toHome)}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText>Sair</ListItemText>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default AvatarIcon;
