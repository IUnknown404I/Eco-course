import React from 'react';
import {InfoCircleTwoTone} from "@ant-design/icons";
import {Typography} from "antd";

const { Paragraph } = Typography;


const GlossaryParagraph = ({text, twoToneColor}) => {
    const color = twoToneColor ? twoToneColor : 'mediumseagreen';
    const [termin, transcription] = text.split('-');

    return (
        <>
            <Paragraph
                copyable={{
                    text: text,
                    tooltips: ['Нажми для копирования', 'Скопировано!'],
                }}
            >
                <InfoCircleTwoTone twoToneColor={color}/><strong>{termin}</strong> - {transcription}.
            </Paragraph> <br/>
        </>
    );
};

export default GlossaryParagraph;