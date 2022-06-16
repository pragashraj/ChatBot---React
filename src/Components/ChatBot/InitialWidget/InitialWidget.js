import React from 'react'

import './InitialWidget.css'

const InitialWidget = () => {
  return (
    <div className = 'initial-widget-root'>
        <span className = 'initial-widget-span'>
        This conversation will remain available for up to 24 hrs after the chat is closed. 
        To remove it sooner, choose End Chat from the drop-down menu.
        </span>
    </div>
  )
}

export default InitialWidget