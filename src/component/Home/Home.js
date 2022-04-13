import {useContext} from 'react';
import React from 'react';
import './Home.css';
import netflix from './netflix.jpg';
import { Row, Col } from 'react-bootstrap';
import { netflixContext } from '../../Context/netflixContext';



function Home() {
    const {sendTransaction,withdrawTransaction} = useContext(netflixContext);  
      
    return (
        <Row style={{ backgroundColor: "black", height: "1000" }}>
            <img src={netflix} alt="Netflix" width="400" height="500" />
            <Col style={{ width: "400px" }}>
                <br/><br/>
                <button onClick={()=>sendTransaction()} style={{ backgroundColor: "red", color: "black", font: "initial", border: "transparent" }}><b>Subscribe</b></button>
                <br /><br />
                <button onClick={()=>withdrawTransaction()} style={{ backgroundColor: "red", color: "black", font: "initial", border: "transparent" }}><b>Withdraw</b></button>
                <br /><br /><br />
            </Col>
        </Row>
    );
}
export default Home;