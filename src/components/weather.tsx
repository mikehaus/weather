import React from 'react';
import { Button } from 'rsuite';
import { StringLiteral } from 'typescript';

interface Props {
    text: string;
}

export const Weather = ({ text }: Props) => {
    return (
        <div>"
            <Button appearance='primary'>
                {text}
            </Button>
        </div>
    )
}

export default Weather;