import { useState } from "react";
import ImageChange from "./imageChange";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function SelectColor(){
    let [ClipOn, setClipOn] = useState('')
    function select(){
        switch(select){
            case 'clip-on_blackBtn':
                ClipOn = setClipOn('black');
            case 'clip-on_greenBtn':
                ClipOn = setClipOn('black');
        }
    }
    return (
    <>
        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Clip-On {}</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="black"
            name="radio-buttons-group"
        >
            <FormControlLabel value="black" control={<Radio />} label="Black" />
            <FormControlLabel value="green" control={<Radio />} label="Green" />
            <FormControlLabel value="gold" control={<Radio />} label="Gold" />
        </RadioGroup>
        </FormControl>
    </>
    );
}
export default SelectColor;