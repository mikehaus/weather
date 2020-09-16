import React from 'react';
import CSS from 'csstype'
import { FlexboxGrid } from 'rsuite';
import { StringLiteral } from 'typescript';

interface Props {
    text: string;
}

const WEATHER_BOX: CSS.Properties = {
    top: '10%',
}

//export const Weather = ({ text }: Props) => {

export const Weather = () => {
    return (
        <div className='show-grid' style={WEATHER_BOX}>
            <FlexboxGrid justify='center'>
                <FlexboxGrid.Item colspan={16} backgroundColor="#fff">

                </FlexboxGrid.Item>
            </FlexboxGrid>
        </div>
    )
}

export default Weather;