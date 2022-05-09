import {GenshinStyles} from "../../theme";
import {useState} from "react";
import {
    ARTIFACT_NAMES,
    calculateEnhancement,
    MAIN_PROP_RATE,
    POSITION,
    propTypeCondenser,
    VICE_PROP_TYPE
} from "../../components/constances";
import {FormControl, Grid} from "@material-ui/core";
import {
    Button,
    ButtonGroup,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Slider,
} from "@mui/material";
import axios from "axios";
import background from "../../images/erased_template.png";
import {getConstraint, SImg} from "./MainArea";
import "./styles/tayvet.css";
import "./styles/mainPage.css";


// todo reformat code using Formik

export const Teyvat = () => {

    const classes = GenshinStyles();

    const [level, setLevel] = useState(20);

    const [position, setPosition] = useState('flower');

    const [mainProp, setMainProp] = useState(0);

    // constraints is the available props for the mainProp
    const [constraints, setConstraints] = useState(getConstraint('flower'));

    // const [remainingViceProps, setRemainingViceProps] = useState(getAvailableProps(mainProp, position));

    const [usedProps, setUsedProps] = useState([constraints[0]]);

    const [vicePropOne, setVicePropOne] = useState(0);

    const [vicePropTwo, setVicePropTwo] = useState(0);

    const [vicePropThree, setVicePropThree] = useState(0);

    const [vicePropFour, setVicePropFour] = useState(0);

    const [remainingEnhanceCount, setRemainingEnhanceCount] = useState(level / 4);

    // 圣遗物的起始强化次数为1
    const [enhanceCountOne, setEnhanceCountOne] = useState(1);

    const [enhanceCountTwo, setEnhanceCountTwo] = useState(1);

    const [enhanceCountThree, setEnhanceCountThree] = useState(1);

    const [enhanceCountFour, setEnhanceCountFour] = useState(1);

    const [artifact, setArtifact] = useState();

    const handlePositionChange = (e) => {
        e.preventDefault();
        setPosition(e.target.value);
        // update drop down of main prop type
        let newConstrains = getConstraint(e.target.value)
        setConstraints(newConstrains);
        // user cannot deselect the main prop, this should return to the first available item in the dropdown
        // default to select the first item
        setMainProp(0);
        // we can hard code main prop to zero as it has been set above
        // setRemainingViceProps(getAvailableProps(0, e.target.value));
        // should also update remaining vice props when main prop changed.
        resetViceProps(e.target.value);
        setUsedProps([newConstrains[0]]);
    }

    const resetViceProps = () => {
        setVicePropOne(0);
        setVicePropTwo(0);
        setVicePropThree(0);
        setVicePropFour(0);
        setEnhanceCountOne(1);
        setEnhanceCountTwo(1);
        setEnhanceCountThree(1);
        setEnhanceCountFour(1);
        setRemainingEnhanceCount(5);
    }

    const handleMainPropChange = (e) => {
        e.preventDefault();
        setMainProp(e.target.value);
        // reset values for vice props
        // 为了简化步骤，在更改主词条属性后同样会重置副词条
        resetViceProps();
        setUsedProps([constraints[e.target.value]]);
    }

    const handleLevelChange = (e) => {
        e.preventDefault();
        setLevel(e.target.value);
        resetViceProps();
        setRemainingEnhanceCount(e.target.value / 4);
    }


    const getUpdatedUsedProps = (vicePosition, pos) => {
        let temp = [...usedProps];
        if (vicePosition !== 0) {
            temp.splice(usedProps.indexOf(VICE_PROP_TYPE[vicePosition - 1]), 1);
        }
        if (pos !== 0) {
            temp = [...temp, VICE_PROP_TYPE[pos - 1]]
        }
        return temp
    }


    const handleVicePropOneChange = (e) => {
        e.preventDefault();
        let pos = e.target.value;
        setVicePropOne(pos);
        setUsedProps(getUpdatedUsedProps(vicePropOne, pos));
    }

    const handleVicePropTwoChange = (e) => {
        e.preventDefault();
        let pos = e.target.value;
        setVicePropTwo(pos);
        setUsedProps(getUpdatedUsedProps(vicePropTwo, pos));
    }

    const handleVicePropThreeChange = (e) => {
        e.preventDefault();
        let pos = e.target.value;
        setVicePropThree(pos);
        setUsedProps(getUpdatedUsedProps(vicePropThree, pos));
    }

    const handleVicePropFourChange = (e) => {
        e.preventDefault();
        let pos = e.target.value;
        setVicePropFour(pos);
        setUsedProps(getUpdatedUsedProps(vicePropFour, pos));
    }

    const generateVicePropUI = (propPosition, handler) => (
        <Grid item xs={7}>
            <FormControl sx={{m: 1, minWidth: 120}}>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={propPosition}
                    label="Age"
                    onChange={handler}
                    className={classes.root}
                >
                    <MenuItem value={0} className={classes.root}>未选择</MenuItem>
                    {VICE_PROP_TYPE.map((each, index) => {
                        if (!usedProps.includes(each)) {
                            return (
                                <MenuItem key={each} value={index + 1} className={classes.root}>{each}</MenuItem>
                            )
                        } else {
                            return (
                                <MenuItem key={each} value={index + 1} disabled
                                          className={classes.root}>{each}</MenuItem>
                            )
                        }
                    })}
                </Select>
            </FormControl>
        </Grid>
    )


    const handleIncrementOne = (e) => {
        e.preventDefault();
        setEnhanceCountOne(enhanceCountOne + 1);
        setRemainingEnhanceCount(remainingEnhanceCount - 1);
    }

    const handleDecrementOne = (e) => {
        e.preventDefault();
        setEnhanceCountOne(enhanceCountOne - 1);
        setRemainingEnhanceCount(remainingEnhanceCount + 1);
    }

    const handleIncrementTwo = (e) => {
        e.preventDefault();
        setEnhanceCountTwo(enhanceCountTwo + 1);
        setRemainingEnhanceCount(remainingEnhanceCount - 1);
    }

    const handleDecrementTwo = (e) => {
        e.preventDefault();
        setEnhanceCountTwo(enhanceCountTwo - 1);
        setRemainingEnhanceCount(remainingEnhanceCount + 1);
    }

    const handleIncrementThree = (e) => {
        e.preventDefault();
        setEnhanceCountThree(enhanceCountThree + 1);
        setRemainingEnhanceCount(remainingEnhanceCount - 1);
    }

    const handleDecrementThree = (e) => {
        e.preventDefault();
        setEnhanceCountThree(enhanceCountThree - 1);
        setRemainingEnhanceCount(remainingEnhanceCount + 1);
    }

    const handleIncrementFour = (e) => {
        e.preventDefault();
        setEnhanceCountFour(enhanceCountFour + 1);
        setRemainingEnhanceCount(remainingEnhanceCount - 1);
    }

    const handleDecrementFour = (e) => {
        e.preventDefault();
        setEnhanceCountFour(enhanceCountFour - 1);
        setRemainingEnhanceCount(remainingEnhanceCount + 1);
    }

    const GenerateEnhanceCountUI = (value, incrementHandler, decrementHandler) => (
        <Grid item xs={5}>
            <ButtonGroup size="small" aria-label="small outlined button group">
                {(value > 1) ? <Button onClick={decrementHandler}>-</Button> :
                    <Button onClick={decrementHandler} disabled>-</Button>}
                {value && <Button disabled>{value}</Button>}
                {(remainingEnhanceCount > 0) ? <Button onClick={incrementHandler}>+</Button> :
                    <Button onClick={incrementHandler} disabled>+</Button>}
            </ButtonGroup>
        </Grid>
    )

    const submitHandler = (e) => {
        e.preventDefault();
        if (vicePropOne === 0 || vicePropTwo === 0 || vicePropThree === 0 || vicePropFour === 0) {
            alert('至少有一个副属性位为空缺');
        } else if (remainingEnhanceCount !== 0) {
            alert('有至少一次强化次数未使用');
        } else {
            let data = {
                "title": ARTIFACT_NAMES[position],
                // todo: just hard code mode to teyvat here.
                "mode": "teyvat",
                "level": level,
                "position": POSITION[position],
                "mainProp": propTypeCondenser(constraints[mainProp]),
                'mainPropRate': MAIN_PROP_RATE[constraints[mainProp]],
                'viceOne': `${propTypeCondenser(VICE_PROP_TYPE[vicePropOne - 1])}+${calculateEnhancement(vicePropOne, enhanceCountOne)}`,
                'viceTwo': `${propTypeCondenser(VICE_PROP_TYPE[vicePropTwo - 1])}+${calculateEnhancement(vicePropTwo, enhanceCountTwo)}`,
                'viceThree': `${propTypeCondenser(VICE_PROP_TYPE[vicePropThree - 1])}+${calculateEnhancement(vicePropThree, enhanceCountThree)}`,
                'viceFour': `${propTypeCondenser(VICE_PROP_TYPE[vicePropFour - 1])}+${calculateEnhancement(vicePropFour, enhanceCountFour)}`,
            };
            console.log(data);
            axios.post("http://localhost:4000/chinese_tayvet/", data).then(response => {
                setArtifact(response.data.split("'")[1]);
            })
        }
    }

    return (
        <Grid container spacing={{xs: 2, md: 1}}>

            <Grid item xs={6}>
                <div className="left_editor">
                    <p className="genshin_text">主工作界面</p>
                    <form onSubmit={submitHandler}>

                        <FormControl component="fieldset">
                            <FormLabel component="legend" className={classes.root}>圣遗物位</FormLabel>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" value={position}
                                        onChange={handlePositionChange}>
                                <FormControlLabel className={classes.root} value="flower" control={<Radio/>}
                                                  label="生之花"/>
                                <FormControlLabel className={classes.root} value="feather" control={<Radio/>}
                                                  label="死之羽"/>
                                <FormControlLabel className={classes.root} value="sandglass" control={<Radio/>}
                                                  label="时之沙"/>
                                <FormControlLabel className={classes.root} value="goblet" control={<Radio/>}
                                                  label="空之杯"/>
                                <FormControlLabel className={classes.root} value="crown" control={<Radio/>}
                                                  label="理之冠"/>
                            </RadioGroup>
                        </FormControl>

                        <FormControl sx={{m: 1, minWidth: 120}}>
                            <InputLabel id="demo-simple-select-helper-label" className={classes.root}>主词条属性</InputLabel>
                            <Select
                                labelId="main-prop-select-label"
                                id="main-prop-select"
                                value={mainProp}
                                label="主词条"
                                onChange={handleMainPropChange}
                                className={classes.root}
                            >
                                {constraints.map((each, index) => (
                                        <MenuItem key={each} value={index} className={classes.root}>{each}</MenuItem>
                                    )
                                )}
                            </Select>
                        </FormControl>
                        <Grid container spacing={{xs: 2, md: 1}}>
                            <Grid item xs={7}>
                                <p className="genshin_text">副词条属性</p>
                            </Grid>
                            <Grid item xs={5}>
                                <p className="genshin_text">强化次数({remainingEnhanceCount})</p>
                            </Grid>


                            {/*---------------------artifact's vice prop selection-----------------------*/}

                            {generateVicePropUI(vicePropOne, handleVicePropOneChange)}
                            {GenerateEnhanceCountUI(enhanceCountOne, handleIncrementOne, handleDecrementOne)}

                            {generateVicePropUI(vicePropTwo, handleVicePropTwoChange)}
                            {GenerateEnhanceCountUI(enhanceCountTwo, handleIncrementTwo, handleDecrementTwo)}

                            {generateVicePropUI(vicePropThree, handleVicePropThreeChange)}
                            {GenerateEnhanceCountUI(enhanceCountThree, handleIncrementThree, handleDecrementThree)}

                            {generateVicePropUI(vicePropFour, handleVicePropFourChange)}
                            {GenerateEnhanceCountUI(enhanceCountFour, handleIncrementFour, handleDecrementFour)}

                        </Grid>
                        <Button variant="contained" type="submit" className="submit_button">生成</Button>
                    </form>
                </div>
            </Grid>
            <Grid item xs={6}>
                <p className="genshin_text">生成界面</p>
                {!!artifact ? <SImg src={`data:image/png;base64,${artifact}`}/> : <SImg src={background}/>}
            </Grid>
        </Grid>
    )
}