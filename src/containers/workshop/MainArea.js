import {
    CROWN_CONSTRAINT,
    FEATHER_CONSTRAINT,
    FLOWER_CONSTRAINT,
    GOBLET_CONSTRAINT,
    MAIN_PROP_TYPES,
    SANDGLASS_CONSTRAINT
} from "../../components/constances";
import styled from "styled-components";
import {useState} from "react";
import {Teyvat} from "./Teyvat";
import {
    ToggleButton,
    ToggleButtonGroup
} from "@mui/material";
import {GenshinStyles} from "../../theme";
import {Celestia} from "./Celestia";
import "./styles/mainPage.css";


export function getConstraint(position) {
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

export const SImg = styled.img`
    height: 900px;
    width: 538px;
`;


export const Workshop = () => {

    const classes = GenshinStyles();

    const [mode, setMode] = useState("celestia");

    const handleModeChange = (e) => {
        e.preventDefault();
        setMode(e.target.value);
    }

    return (
        <div>
            <div className="mode_selector">
                <ToggleButtonGroup
                    color="primary"
                    value={mode}
                    exclusive
                    onChange={handleModeChange}
                >
                    <ToggleButton value="teyvat" className={classes.root}>提瓦特</ToggleButton>
                    <ToggleButton value="celestia" className={classes.root}>天空岛</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div>
                {mode === "teyvat" ? <Teyvat/> : <Celestia/>}
            </div>
        </div>
    )
}
