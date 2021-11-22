import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import {
    EyeOutlined,
    EyeInvisibleOutlined,
} from '@ant-design/icons';
require('dotenv').config({ path: '../.env' })
const Secret = ({setPurposely}) => {
    const [key, setKey] = useState('');
    const [type, setType] = useState('password');

    const formSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if(key === process.env.REACT_APP_SEC_KEY) {
            localStorage.setItem('auth', '1')
            localStorage.setItem('authTime', Date.now().toString());
            setPurposely(true);
        } else if(!document.querySelector('.secret-in input').className.includes('secret-wrong')) {
            document.querySelector('.secret-in input').className += ' secret-wrong';
        }
    }

    return (
        <div className='opacity'>
            <div className='secret_container'>
                <h1>Для продолжения введите кодовую фразу:</h1>

                <form onSubmit={event => formSubmit(event)}>
                    <div className='eco-flex-row flex-centered secret-in'>
                        <MyInput
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                            placeholder='Введите ключ-фразу'
                            type={type}
                        />
                        {type==='password'
                            ? <EyeOutlined onClick={() => {
                                setType('text');
                            }} className='sec-ico'/>
                            : <EyeInvisibleOutlined onClick={() => {
                                setType('password');
                            }} className='sec-ico'/>
                        }
                    </div>

                    <button>Подтвердить</button>
                </form>

            </div>
        </div>
    );
};

export default Secret;