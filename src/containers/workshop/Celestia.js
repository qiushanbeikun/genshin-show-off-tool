import {Checkbox, Grid, TextField} from "@mui/material";
import {SImg} from "./MainArea";
import background from "../../images/celestia_template.png";
import {useRef, useState} from "react";
import "./styles/mainPage.css"
import "./styles/celestia.css"
import {Button} from "@material-ui/core";
import axios from "axios";
import {ImageCropModal} from "./ImageCropModal";
import Modal from "react-modal";
import ReactCrop from "react-image-crop";
import {getCroppedImg} from "./getCroppedImg";
import {useDebounceEffect} from "./useDebounceEffect";

const INPUT_PRESET = {
    "title": "",
    "position": "",
    "main_prop": "",
    "main_prop_val": "",
    "vice_prop1": "",
    "vice_prop2": "",
    "vice_prop3": "",
    "vice_prop4": "",
    "desc_title": "",
    "desc": "",
    "owner": "",
    "image": "",
    "allowBlank": true,
}

export const Celestia = () => {

    const [artifact, setArtifact] = useState();

    const [inputObj, setInputObj] = useState(INPUT_PRESET);

    const [imgPath, setImgPath] = useState("");

    const [isModalActive, setIsModalActive] = useState(false);

    const [tempImg, setTempImg] = useState();

    const imgRef = useRef();
    const [crop, setCrop] = useState({
        unit: "px",
        x: 25,
        y: 25,
        width: 50,
        height: 50,
    });
    const [completeCrop, setCompleteCrop] = useState();

    const handleInputChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setInputObj({...inputObj, [name]: value})
    }

    const handleBlankRuleChange = (e) => {
        setInputObj({...inputObj, "allowBlank": !inputObj.allowBlank});
    }

    const handleImgUpload = (e) => {
        e.preventDefault();
        if (e.target.files.length !== 0) {
            setImgPath(URL.createObjectURL(e.target.files[0]));
            setIsModalActive(true);
        }
    }

    const handleCropComplete = (c, pc) => {
        console.log(123, pc,c)
        getCroppedImg(imgRef.current, c).then((res) => {
            console.log(res);
            setTempImg(res);
        })
    }

    const handleModalClose = (e) => {
        e.preventDefault();
        setIsModalActive(false);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const haveEmpty = Object.keys(inputObj).reduce((acc, cur) => acc && cur !== "", true);

        if (!inputObj.allowBlank && haveEmpty) {
            alert("at least one input is empty")
            // todo highlight the empty inputs
        }

        axios.post("http://localhost:4000/chinese_celestia/", inputObj).then((response) => {
            console.log(response.data)
            setArtifact(response.data.split("'")[1])
        });

    }

    const handleModifyCrop = (e) => {
        e.preventDefault();
        setIsModalActive(true);
    }

    return (
        <form onSubmit={submitHandler}>
            <Grid container spacing={{xs: 2, md: 1}}>
                <Grid item xs="6">
                    <div className="left_editor">
                        <p>水贴界面</p>

                        <Grid container>
                            <Grid item xs="4">
                                <p>允许空位</p>
                            </Grid>
                            <Grid item xs="8">
                                <Checkbox checked={inputObj["allowBlank"]} onChange={handleBlankRuleChange}/>
                            </Grid>
                            <Grid item xs="4">
                                <p>圣遗物图片</p>
                            </Grid>
                            <Grid item xs="8">
                                <input type="file" accept="*image" id="select_artifact_img" onChange={handleImgUpload}/>
                                <button type="button" onClick={handleModifyCrop}>修改裁剪</button>
                                {(!!tempImg)? <img src={tempImg} alt="whatever"/> : <p>预览</p>}

                            </Grid>
                            <Grid item xs="4">
                                <p>圣遗物名称</p>
                            </Grid>
                            <Grid item xs="8">
                                <TextField className="input_field" name="title" value={inputObj.title}
                                           onChange={handleInputChange}/>
                            </Grid>
                            <Grid item xs="4">
                                <p>圣遗物位</p>
                            </Grid>
                            <Grid item xs="8">
                                <TextField className="input_field" name="position" value={inputObj.position}
                                           onChange={handleInputChange}/>
                            </Grid>
                            <Grid item xs="4">
                                <p>主词条属性</p>
                            </Grid>
                            <Grid item xs="8">
                                <TextField className="input_field" name="main_prop" value={inputObj.main_prop}
                                           onChange={handleInputChange}/>
                            </Grid>
                            <Grid item xs="4">
                                <p>主词条数值</p>
                            </Grid>
                            <Grid item xs="8">
                                <TextField className="input_field" name="main_prop_val" value={inputObj.main_prop_val}
                                           onChange={handleInputChange}/>
                            </Grid>
                            <Grid item xs="4">
                                <p>副词条1</p>
                            </Grid>
                            <Grid item xs="8">
                                <TextField className="input_field" name="vice_prop1" value={inputObj.vice_prop1}
                                           onChange={handleInputChange}/>
                            </Grid>
                            <Grid item xs="4">
                                <p>副词条2</p>
                            </Grid>
                            <Grid item xs="8">
                                <TextField className="input_field" name="vice_prop2" value={inputObj.vice_prop2}
                                           onChange={handleInputChange}/>
                            </Grid>
                            <Grid item xs="4">
                                <p>副词条3</p>
                            </Grid>
                            <Grid item xs="8">
                                <TextField className="input_field" name="vice_prop3" value={inputObj.vice_prop3}
                                           onChange={handleInputChange}/>
                            </Grid>
                            <Grid item xs="4">
                                <p>副词条4</p>
                            </Grid>
                            <Grid item xs="8">
                                <TextField className="input_field" name="vice_prop4" value={inputObj.vice_prop4}
                                           onChange={handleInputChange}/>
                            </Grid>
                            <Grid item xs="4">
                                <p>介绍标题</p>
                            </Grid>
                            <Grid item xs="8">
                                <TextField className="input_field" name="desc_title" value={inputObj.desc_title}
                                           onChange={handleInputChange}/>
                            </Grid>
                            <Grid item xs="4">
                                <p>介绍</p>
                            </Grid>
                            <Grid item xs="8">
                                <TextField className="input_field" name="desc" value={inputObj.desc}
                                           onChange={handleInputChange} multiline maxRows="7"/>
                            </Grid>
                            <Grid item xs="4">
                                <p>佩戴者</p>
                            </Grid>
                            <Grid item xs="8">
                                <TextField className="input_field" name="owner" value={inputObj.owner}
                                           onChange={handleInputChange}/>
                            </Grid>
                        </Grid>
                        <Button variant="contained" type="submit" className="submit_button">生成</Button>
                    </div>

                </Grid>
                <Grid item xs="6">
                    <p className="genshin_text">生成界面</p>
                    {!!artifact ? <SImg src={`data:image/png;base64,${artifact}`}/> : <SImg src={background}/>}
                </Grid>
            </Grid>


            {/*<ImageCropModal isModalActive={isModalActive} imgPath={imgPath} handleModalClose={handleModalClose}/>*/}

            <div>
                <Modal isOpen={isModalActive}>
                    <div>
                        <p>图片裁剪</p>
                        <Button onClick={handleModalClose}>Crop</Button>
                    </div>
                    <ReactCrop crop={crop} onChange={c => setCrop(c)} onComplete={handleCropComplete} aspectf={1}>
                        <img src={imgPath} alt="img_to_crop" ref={imgRef}/>
                    </ReactCrop>
                </Modal>
            </div>
        </form>
    )


}