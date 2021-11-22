import React from 'react';

const UserResults = ({results}) => {
    return (
        <table className="results_table">
            <caption>Результаты прохождения тестов</caption>
            <thead>
                <tr style={{background: 'azure'}}>
                    <th>Тест</th>
                    <th>Дата</th>
                    <th>Затраченное время</th>
                    <th>Результат</th>
                </tr>
            </thead>
            <tbody>
                {results.length
                    ? results.map((res) =>
                        <tr key={res.id} style={{background: res.mark===5 ?'lightgreen':res.mark===4 ?'lightyellow':res.mark===3 ?'lightgray':'lightpink'}}>
                            <td> {res.test_name} </td>
                            <td> {res.date} </td>
                            <td>
                                {res.elapsed_time >= 60
                                    ? (Math.trunc(res.elapsed_time / 60)+'мин '
                                        + (res.elapsed_time % 60 !== 0 ? (res.elapsed_time % 60)+'с' : ''))
                                    : ((res.elapsed_time % 60) + 'с')
                                }
                            </td>
                            <td> {res.mark} </td>
                        </tr>)
                    : void(0)
                }
            </tbody>
        </table>
    );
};

export default UserResults;