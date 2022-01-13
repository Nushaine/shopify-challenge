import React from "react"

export default function ToolTip(props: {text: string}) {
  return (
    <div className="tooltip-container flex-col-hcenter">
      <img src="/arrow.svg" alt="arrow" className="arrow" />
      <div className="tooltop-text flex-row-vcenter-hcenter">
        <p className="tooltiptext flex-hcenter">{props.text}</p>
      </div>
    </div>
  )
}
