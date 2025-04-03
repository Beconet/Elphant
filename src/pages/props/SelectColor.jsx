import { useState } from "react";
import ImageChange from "./imageChange";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function SelectColor(){
    let [colorClipOn, setColorClipOn] = useState('Black')

    return (
    <>
        <ImageChange clipOnColor={colorClipOn} />
        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Clip-On : {colorClipOn}</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="black"
            name="radio-buttons-group"
        >
            <FormControlLabel value="Black" control={<Radio />} label="Black" name="clip-on" checked={colorClipOn === 'Black'} onChange={(e)=>{setColorClipOn(e.target.value)}} />
            <FormControlLabel value="Green" control={<Radio />} label="Green" name="clip-on" checked={colorClipOn === 'Green'} onChange={(e)=>{setColorClipOn(e.target.value)}} />
            <FormControlLabel value="LightBrown" control={<Radio />} label="LightBrown" name="clip-on" checked={colorClipOn === 'LightBrown'} onChange={(e)=>{setColorClipOn(e.target.value)}} />
            <FormControlLabel value="White" control={<Radio />} label="White" name="clip-on" checked={colorClipOn === 'White'} onChange={(e)=>{setColorClipOn(e.target.value)}} />

        </RadioGroup>
        </FormControl>
    </>
    );
}
export default SelectColor;