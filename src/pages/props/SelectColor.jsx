import { useState } from "react";
import { motion } from "framer-motion";
import ImageChange from "./imageChange";
import background from './background/background-prototype.png'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function SelectColor() {
    const [colorClipOn, setColorClipOn] = useState('Black');
    const [colorShoe, setColorShoe] = useState('Black');
    const [colorLock, setColorLock] = useState('DarkBrown');

    const colorsClipOn = {
        Black: "bg-black",
        Green: "bg-green-600",
        LightBrown: "bg-yellow-200",
        White: "bg-white border border-gray-400"
    };

    const colorsChoe = {
        Black: "bg-black",
        LightBrown: "bg-yellow-200",
        White: "bg-white border border-gray-400"
    };
    const colorsLock = {
        DarkBrown: "bg-yellow-900",
        Green: "bg-green-600",
        LightBrown: "bg-yellow-200",
        Mint: "bg-sky-200 border border-gray-400"
    };

    return (
        <>
        <div style={{backgroundImage: `url(${background})`,}}>
            <ImageChange clipOnColor={colorClipOn} shoeColor={colorShoe} lockColor={colorLock}/>
            
            <div className="flex justify-center h-100"> 
                {/* หูหนีบ */} 
                <div className="m-8">
                    <div className="m-8">
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                            <div className="flex justify-center">
                                <span className="text-white text-2xl">หูหนีบ</span>
                            </div>
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            value={colorClipOn}
                            name="radio-buttons-group"
                            onChange={(e) => setColorClipOn(e.target.value)}
                        >
                            <div className="flex items-center space-x-4">
                                {Object.keys(colorsClipOn).map((color) => (
                                    <motion.div
                                        key={color}
                                        className="relative cursor-pointer m-5"
                                        initial={{ scale: 1 }}
                                        animate={{ scale: colorClipOn === color ? 1.1 : 1 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255,255,255,0.3)" }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setColorClipOn(color)}
                                    >
                                        <Radio
                                            value={color}
                                            checked={colorClipOn === color}
                                            onChange={() => {}}
                                            sx={{ display: "none" }}
                                        />
                                        <motion.div
                                            className={`w-12 h-12 rounded-full transition-all duration-300 ${colorsClipOn[color]} ${
                                                colorClipOn === color
                                                    ? "border-2 border-white shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                                                    : "shadow-md"
                                            }`}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </RadioGroup>
                    </FormControl>
                    </div>
                </div>


            {/* พื้นรองเท้า */}
            <div className="m-8">
                <div className="m-8">
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                            <div className="flex justify-center">
                                <span className="text-white text-2xl">พื้นรองเท้า</span>
                            </div>
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            value={colorShoe}
                            name="radio-buttons-group"
                            onChange={(e) => setColorShoe(e.target.value)}
                        >
                            <div className="flex items-center space-x-4">
                                {Object.keys(colorsChoe).map((color) => (
                                    <motion.div
                                        key={color}
                                        className="relative cursor-pointer m-5"
                                        initial={{ scale: 1 }}
                                        animate={{ scale: colorShoe === color ? 1.1 : 1 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255,255,255,0.3)" }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setColorShoe(color)}
                                    >
                                        <Radio
                                            value={color}
                                            checked={colorShoe === color}
                                            onChange={() => {}}
                                            sx={{ display: "none" }}
                                        />
                                        <motion.div
                                            className={`w-12 h-12 rounded-full transition-all duration-300 ${colorsChoe[color]} ${
                                                colorShoe === color
                                                    ? "border-2 border-white shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                                                    : "shadow-md"
                                            }`}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
            {/* ตัวล็อก */}
            <div className="m-8">
                <div className="m-8">
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                            <div className="flex justify-center">
                                <span className="text-white text-2xl">ตัวล็อก</span>
                            </div>
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            value={colorLock}
                            name="radio-buttons-group"
                            onChange={(e) => setColorLock(e.target.value)}
                        >
                            <div className="flex items-center space-x-4">
                                {Object.keys(colorsLock).map((color) => (
                                    <motion.div
                                        key={color}
                                        className="relative cursor-pointer m-5"
                                        initial={{ scale: 1 }}
                                        animate={{ scale: colorLock === color ? 1.1 : 1 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255,255,255,0.3)" }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setColorLock(color)}
                                    >
                                        <Radio
                                            value={color}
                                            checked={colorLock === color}
                                            onChange={() => {}}
                                            sx={{ display: "none" }}
                                        />
                                        <motion.div
                                            className={`w-12 h-12 rounded-full transition-all duration-300 ${colorsLock[color]} ${
                                                colorLock === color
                                                    ? "border-2 border-white shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                                                    : "shadow-md"
                                            }`}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>

            </div>
        </div>
        </>
    );
}

export default SelectColor;
