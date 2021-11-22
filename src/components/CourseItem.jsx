import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useHistory} from 'react-router-dom';

const CourseItem = () => {
    const router = useHistory();

    return (
        <div className='course__variant'>
            <div className='course__variant__content'>
                <strong>1. «Обеспечение экологической безопасности руководителями и специалистами общехозяйственных систем управления»</strong>
            </div>
            <div className='course__variant__info'>
                <span style={{marginBottom: '15px'}}>Дополнительная профессиональная программа повышения квалификации. – СПб: НОЦ ООО «Газпром межрегионгаз инжиниринг», 2021.</span>

                <MyButton onClick={() => router.push('/courses/eco/preview')}>
                    Перейти
                </MyButton>
            </div>
        </div>
    );
};

export default CourseItem;