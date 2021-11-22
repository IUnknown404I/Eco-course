import {Button, Modal} from 'antd';
import Draggable from 'react-draggable';
import React, {useEffect, useRef, useState} from "react";

const Draggable_Modal = ({title, content, show, hide}) => {
    const [state, setState] = useState({
        visible: show,
        disabled: true,
        bounds: { left: 0, top: 0, bottom: 0, right: 0 },
    });
    const draggleRef = useRef();

    const close = e => {
        hide(false);
    };

    const onStart = (event, uiData) => {
        const { clientWidth, clientHeight } = window?.document?.documentElement;
        const targetRect = draggleRef?.current?.getBoundingClientRect();
        setState({
            ...state,
            bounds: {
                left: -targetRect?.left + uiData?.x,
                right: clientWidth - (targetRect?.right - uiData?.x),
                top: -targetRect?.top + uiData?.y,
                bottom: clientHeight - (targetRect?.bottom - uiData?.y),
            },
        });
    };

    useEffect(() => {
        setState({
            ...state,
            visible: show,
        });

        // if(state.visible !== show) {
        //     setState({
        //         ...state,
        //         visible: show,
        //     });
        // }
    }, [show]);


    return (
        <>
            <Modal
                title={
                    <div
                        style={{
                            width: '100%',
                            cursor: 'move',
                        }}
                        onMouseOver={() => {
                            if (state.disabled) {
                                setState({
                                    ...state,
                                    disabled: false,
                                });
                            }
                        }}
                        onMouseOut={() => {
                            setState({
                                ...state,
                                disabled: true,
                            });
                        }}
                        onFocus={() => {}}
                        onBlur={() => {}}
                    >
                        {title}
                    </div>
                }
                footer={[
                    <Button key="back" onClick={(event) => {
                        close(event);
                    }}>
                        Закрыть
                    </Button>
                ]}
                // footer={null}
                // visible={state.visible}
                visible={show}
                onOk={close}
                onCancel={close}
                modalRender={modal => (
                    <Draggable
                        disabled={state.disabled}
                        bounds={state.bounds}
                        onStart={(event, uiData) => onStart(event, uiData)}
                    >
                        <div ref={draggleRef}>{modal}</div>
                    </Draggable>
                )}
            >
                {content}
            </Modal>
        </>
    );
}

export default Draggable_Modal;