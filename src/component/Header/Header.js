import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AlertDialogSlide from '../WalletPopUp/AlertDialogSlide';
import logo from "./logo.jpg";
import { Row, Col } from 'react-bootstrap';

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <div>
            <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className='header' collapseOnSelect>
                <Container>
                    <Navbar.Brand as={Link} to="/" className='logo-font' >
                    <Row>
                        <Col>
                            <img src={logo} alt="Netflix" width="20" height="20"/>
                            <p className='text-white'><b>Netflix</b></p>
                        </Col>
                    </Row>
                    </Navbar.Brand>
                       <Navbar.Toggle/>
                            <Navbar.Collapse>
                                <Nav className="me-auto">
                                
                                </Nav>
                                <Nav>
                                <Nav.Link onClick={handleClickOpen} className='connectMenu' href="#connect">
                                    <AccountBalanceWalletIcon className='walletIcon'/>
                                </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                </Container>
            </Navbar>
            <AlertDialogSlide
               open={open}
               handleClose={handleClose}
            >
            </AlertDialogSlide>
        </div>
    );
};

export default Header;