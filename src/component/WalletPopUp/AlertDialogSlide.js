import {forwardRef, useContext} from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import './AlertDialogSlide.css';
import metamask from './paymentWallet/1.png';
import { Card, Col, Row } from 'react-bootstrap';
import { netflixContext } from '../../Context/netflixContext';


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({open, handleClose}) {
  const {connectWallet} = useContext(netflixContext);  

  return (
    <div className='dialogDiv'>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className='dialog'
      >
        <div className="dialogWallet">

        <div className="closeBtn">
          <Button onClick={handleClose} className="text-white fs-6">X</Button>
        </div>
        <DialogContent className='alertWalletDiv'>
        <p className='content mt-3'>Connect with one of the wallet.</p>

        <DialogContentText id="alert-dialog-slide-description">
        <Row xs={1} md={1} className="g-2 mt-3">
                  
            <Col>
              <Card className='walletDiv' onClick={()=>connectWallet()}>
                <Card.Img variant="top" src={metamask} className="imgWallet"/>
                <Card.Body>
                  <Card.Title className='walletName'>MetaMask</Card.Title>
                </Card.Body>
              </Card>
            </Col>
      </Row>
      <p className='text-center mt-4'>
      <Button onClick={handleClose} className="text-white fs-6 bg-danger">cancel</Button>
      </p>
       </DialogContentText>
        </DialogContent>

        </div>
      </Dialog>
    </div>
  );
}
