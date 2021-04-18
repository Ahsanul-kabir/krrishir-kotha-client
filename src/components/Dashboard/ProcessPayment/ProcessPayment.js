import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51IelfGJBxHT2pUbRm03tIDwHfgZ3s2SXe6BJjm1M77QynScexxZtvb8E63q8J5y8AWmuD2m2fZLvqpatrVPJTgof00gYNTRgWV');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;