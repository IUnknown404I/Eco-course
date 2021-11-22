import React from 'react';
import {InfoCircleTwoTone} from "@ant-design/icons";
import {Typography} from "antd";

const { Paragraph } = Typography;

const LiteratureParagraph = ({text, twoToneColor, ident}) => {
    const color = twoToneColor ? twoToneColor : 'mediumseagreen';
    let termin = '';
    let transcription = '';

    if(!ident) {
        let split = text.split('от');
        termin = split[0];
        split = split.slice(1, split.length);
        transcription = split.join(' ');
        transcription = 'от ' + transcription;
    } else {
        termin = ident;
        transcription = text.split(ident).join(' ');
    }

    return (
        <>
            <Paragraph>
                <InfoCircleTwoTone twoToneColor={color}/><strong>{termin}</strong> {transcription}.
            </Paragraph>
        </>
    );
};

export default LiteratureParagraph;