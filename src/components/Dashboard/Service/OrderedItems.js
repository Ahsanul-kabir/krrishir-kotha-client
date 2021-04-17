import React from 'react';

const OrderedItems = ({order}) => {
    return (
        <div className="d-flex justify-content-between">
            <div style={{background: '#DEFFED', borderRadius: '5px', padding: '15px', width: '350px', marginLeft: '15px', marginTop: '15px',}}>
                <div>
                    <h4>{order.service}</h4>
                    <p>{order.description}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderedItems;