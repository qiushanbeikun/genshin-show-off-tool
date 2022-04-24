import {Checkbox, FormControl, FormControlLabel, Grid, TextField} from "@mui/material";
import {SImg} from "./MainArea";
import background from "../../images/celestia_template.png";
import {useState} from "react";
import "./styles/mainPage.css"
import "./styles/celestia.css"
import {Button} from "@material-ui/core";
import axios from "axios";

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

    const handleInputChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setInputObj({...inputObj, [name]: value})
    }

    const handleBlankRuleChange = (e) => {
        e.preventDefault();
        console.log(e.target.checked);
        setInputObj({...inputObj, "allowBlank": !inputObj.allowBlank});
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const haveEmpty = Object.keys(inputObj).reduce((acc, cur) => acc && cur !== "", true);

        if (!inputObj.allowBlank && haveEmpty) {
            alert("at least one input is empty")
            // todo highlight the empty inputs
        }

        // make request to backend

        console.log(inputObj);
        axios.post("http://localhost:4000/chinese_celestia/", inputObj).then((response) => {
            console.log(response.data)
            setArtifact(response.data.split("'")[1])
        });


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
        </form>
    )


}