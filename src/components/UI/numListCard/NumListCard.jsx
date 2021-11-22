import React from 'react';
import {Popover} from "antd";

const NumListCard = ({num, text, popover}) => {
    if(popover) {
        return (
            <div className='eco-flex-row'>
                <div className='eco-numeration'>{num}</div>
                <div className='eco-numeration-text' style={{fontSize: '19px'}}>
                    <Popover
                        placement="topLeft"
                        color={"azure"}
                        overlayStyle={{width: 'fit-content',maxWidth: '1000px'}}
                        className='pop_text'
                        style={{maxWidth: '200px'}}
                        content={<span>{popover}.</span>}
                        title=''
                        trigger="hover">
                        {text}
                    </Popover>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='eco-flex-row'>
                <div className='eco-numeration'>{num}</div>
                <div className='eco-numeration-text' style={{fontSize: '19px'}}>
                    {text}
                </div>
            </div>
        );
    }
};

export default NumListCard;