import {Grid} from "@material-ui/core";
import {
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select, Slider, ToggleButton, ToggleButtonGroup
} from "@mui/material";
import {FormControl} from "@material-ui/core";
import {GenshinStyles} from "../../theme";
import {useState} from "react";
import {
    CROWN_CONSTRAINT,
    FEATHER_CONSTRAINT,
    FLOWER_CONSTRAINT, GOBLET_CONSTRAINT,
    MAIN_PROP_TYPES,
    SANDGLASS_CONSTRAINT, VICE_PROP_TYPE
} from "../../components/constances";

function getConstraint(position) {
    switch (position) {
        case "flower":
            return FLOWER_CONSTRAINT;
        case "feather":
            return FEATHER_CONSTRAINT;
        case "sandglass":
            return SANDGLASS_CONSTRAINT;
        case "goblet":
            return GOBLET_CONSTRAINT;
        case "crown":
            return CROWN_CONSTRAINT;
        default:
        case "all":
            return MAIN_PROP_TYPES;
    }
}

/**
 * update the remaining prop list by the current main prop
 * note: main prop must be selected all the time, there is no deselect option for main prop
 * @param curMainProp number
 * @param pos string indicate currently selected position
 * @returns string[] string list
 */
// function getAvailableProps(curMainProp, pos) {
//     let temp = [...VICE_PROP_TYPE];
//     let curMainPropValue = getConstraint(pos)[curMainProp];
//     if (temp.includes(curMainPropValue)) {
//         temp.splice(temp.indexOf(curMainPropValue), 1);
//         return temp
//     } else {
//         return VICE_PROP_TYPE;
//     }
// }


export const Workshop = () => {

    const classes = GenshinStyles();

    const [mode, setMode] = useState('web');

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

    const handleModeChange = (event, newAlignment) => {
        setMode(newAlignment);
    };

    const handlePositionChange = (e) => {
        e.preventDefault();
        console.log('position changed to ', e.target.value);
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
        updateViceProps(e.target.value);
        setUsedProps([newConstrains[0]]);
    }

    const updateViceProps = () => {
        setVicePropOne(0);
        setVicePropTwo(0);
        setVicePropThree(0);
        setVicePropFour(0);
    }

    const handleMainPropChange = (e) => {
        e.preventDefault();
        console.log("main prop changed to ", e.target.value);
        setMainProp(e.target.value);
        // reset values for vice props
        // 为了简化步骤，在更改主词条属性后同样会重置副词条
        updateViceProps();
        setUsedProps(constraints[e.target.value]);
    }

    const handleLevelChange = (e) => {
        e.preventDefault();
        // console.log('level change to ', e.target.value);
        setLevel(e.target.value);
    }

    // const handleVicePropTypeChange = (e) => {
    //     e.preventDefault();
    //     // get current remaining available props
    //     if (e.target.value === 0) { // user deselect in current drop down
    //
    //     } else {
    //         if (remainingViceProps.includes(e.target.value)) {
    //             // this should not happen in general, but just leave it here to double check
    //             alert('')
    //         }
    //     }
    // }


    const getUpdatedUsedProps = (vicePosition, pos) => {
        let temp = [...usedProps];
        if (vicePosition !== 0) {
            temp.splice(usedProps.indexOf(VICE_PROP_TYPE[vicePosition - 1]), 1);
        }
        if (pos !== 0) {
            temp = [...temp, VICE_PROP_TYPE[pos - 1]]
        }
        console.log(temp)
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
        <Grid item xs={8}>
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

    return (
        <div>
            <ToggleButtonGroup
                color="primary"
                value={mode}
                exclusive
                onChange={handleModeChange}
            >
                <ToggleButton value="web" className={classes.root}>提瓦特</ToggleButton>
                <ToggleButton value="android" className={classes.root}>天空岛</ToggleButton>
            </ToggleButtonGroup>
            <FormLabel component="legend" className={classes.root}>圣遗物等级</FormLabel>
            <Slider defaultValue={30} valueLabelDisplay="auto" step={4} marks min={0} max={20} value={level}
                    onChange={handleLevelChange}/>

            <FormControl component="fieldset">
                <FormLabel component="legend" className={classes.root}>圣遗物位</FormLabel>
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group" value={position}
                            onChange={handlePositionChange}>
                    <FormControlLabel className={classes.root} value="flower" control={<Radio/>} label="生之花"/>
                    <FormControlLabel className={classes.root} value="feather" control={<Radio/>} label="死之羽"/>
                    <FormControlLabel className={classes.root} value="sandglass" control={<Radio/>}
                                      label="时之沙"/>
                    <FormControlLabel className={classes.root} value="goblet" control={<Radio/>} label="空之杯"/>
                    <FormControlLabel className={classes.root} value="crown" control={<Radio/>} label="理之冠"/>
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
                <Grid item xs={8}>
                    <p className="genshin_text">副词条属性</p>
                </Grid>
                <Grid item xs={4}>
                    <p className="genshin_text">强化次数</p>
                </Grid>


                {/*---------------------artifact's vice prop selection-----------------------*/}




                {generateVicePropUI(vicePropOne, handleVicePropOneChange)}
                <Grid item xs={4}>
                    <p className="genshin_text">强化次数</p>
                </Grid>



                {generateVicePropUI(vicePropTwo, handleVicePropTwoChange)}
                <Grid item xs={4}>
                    <p className="genshin_text">强化次数</p>
                </Grid>



                {generateVicePropUI(vicePropThree, handleVicePropThreeChange)}
                <Grid item xs={4}>
                    <p className="genshin_text">强化次数</p>
                </Grid>



                {generateVicePropUI(vicePropFour, handleVicePropFourChange)}
                <Grid item xs={4}>
                    <p className="genshin_text">强化次数</p>
                </Grid>

            </Grid>

        </div>

    )
}

export function MainArea() {
    return (
        <div>
            <Grid container spacing={{xs: 2, md: 1}}>
                <Grid item xs={6}>
                    <p className="genshin_text">主工作界面</p>
                    <Workshop/>
                </Grid>
                <Grid item xs={6}>
                    <p className="genshin_text">生成界面</p>
                </Grid>
            </Grid>
        </div>
    )
}