import React from "react"

import {Chip} from '@mui/material'

import "./LearningOptions.css"

const LearningOptions = (props) => {
    const options = [
        { text: "Java", handler: props.actionProvider.handleJavaOnClick, id: 1 },
        { text: "Kotlin", handler: () => {}, id: 2 },
        { text: "Python", handler: () => {}, id: 3 },
        { text: "Javascript", handler: () => {}, id: 4 }
    ]

    const renderOption = (option) => {
        return <Chip
            clickable
            component = "a"
            variant = "outlined"
            color = "success"
            key = {option.id}
            label = {option.text}
            onClick = {option.handler}
            sx = {{marginLeft: "1px", marginRight: "1px"}}
        />
    }

    return (
        <div className = "learning-options-container">
            {options.map((option) => renderOption(option))}
        </div>
    )
}

export default LearningOptions