import React from 'react';
import reduxStore from "../redux/store";

const Pagination = ({questions, currentQuestion, setCurrentQuestion}) => {
    return (
        <div className='pagination-container'>
            {questions.length &&
                questions.map((question, index) =>
                    <button
                        className={currentQuestion.id === question.id
                            ? reduxStore.getState().answers[question.id]
                                ? 'pagination-but current-but doneQuestion'
                                : 'pagination-but current-but'
                            : reduxStore.getState().answers[question.id]
                                ? 'pagination-but doneQuestion'
                                : 'pagination-but'
                        }
                        key={question.id}
                        id={question.id}
                        onClick={() => setCurrentQuestion(question)}
                    >
                        {index + 1}
                    </button>
                )
            }
        </div>
    );
};

export default Pagination;