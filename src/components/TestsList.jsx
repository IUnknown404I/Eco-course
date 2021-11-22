import React from 'react';
import TestCard from "./UI/testCard/TestCard";

const TestsList = (props) => {
    return (
        <fieldset className='tests-list'>
            <legend>#Доступные тесты</legend>
            {props.tests.length!==0 &&
                props.tests.map((test) =>
                    <TestCard key={test.id} id={test.id} name={test.name}/>
                )}
        </fieldset>
    );
};

export default TestsList;