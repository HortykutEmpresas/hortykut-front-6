import React from "react";
import './Navbar.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

function Navbar() {
    return (
        <>
            <AppBar position="static" className="appbar">
                <Toolbar variant="dense" className='toolbar'>
                    <Link to='/home' className='text-decorator-none'>
                        <Box className='cursor'>
                            <img src="/src/assets/imagens/logo-texto-transparente.png" alt="Logo horizontal transparente" style={{ width: "9em" }} />
                        </Box>
                    </Link>
                    <Box display="flex" justifyContent="start">
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{ color: "white" }}>
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Box display="flex" justifyContent="start">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{ color: "white" }}>
                                    Venda
                                </Typography>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{ color: "white" }}>
                                    Compra
                                </Typography>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{ color: "white" }}>
                                    Transporte
                                </Typography>
                            </Box>
                            <Link to='/cursos' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{ color: "white" }}>
                                        Cursos
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/planos' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{ color: "white" }}>
                                        Planos
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/sobre' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{ color: "white" }}>
                                        Sobre Nós
                                    </Typography>
                                </Box>
                            </Link>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{ color: "white" }}>
                                    Suporte
                                </Typography>
                            </Box>
                            <Link to='/cadastroUsuario' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{ color: "#464248", background: "#fffd8b" }}>
                                        Faça Parte
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/login' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{ color: "white", background: "#464248" }}>
                                        Login
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
