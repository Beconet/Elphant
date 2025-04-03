function ImageChange({clipOnColor}){
    return(
    <>
    <div className="relative w-full flex justify-center items-center">
        <div className="relative w-fit h-fit">
                <img src="src\pages\props\Elphant.png" alt="Elphant" className="w-full h-auto"/>
                <img src={`src/pages/props/Elphant-Component/Elphant_Clip-on_${clipOnColor}`+ ".png"} className="absolute top-25 left-35 w-100" alt="Elphant-ClipOn" style={{ objectFit: "contain", zIndex: 10 }}/>
        </div>
    </div>
    </>
    );
}
export default ImageChange;