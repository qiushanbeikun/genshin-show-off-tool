import Modal from 'react-modal';
import {useState} from "react";
import ReactCrop from 'react-image-crop'
import {Button} from "@mui/material";
import 'react-image-crop/dist/ReactCrop.css'


export function ImageCropModal({isModalActive, imgPath, handleModalClose}) {

    const [crop, setCrop] = useState();


    return (
        <div>
            <Modal isOpen={isModalActive}>
                <div>
                    <p>图片裁剪</p>
                    <Button onClick={handleModalClose}>Crop</Button>
                </div>
                <ReactCrop crop={crop} onChange={c => setCrop(c)} aspect={1}>
                    <img src={imgPath} alt="img_to_crop"/>
                </ReactCrop>
            </Modal>
        </div>
    )
}