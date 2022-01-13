import React from "react"
  
export default function ToolTip(props: {text: string}) {
  return (
    <div className="tooltip-container flex-col-hcenter">
      <img
        src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d404/dfc9/b236514c01cc6f1df2b92061dafaa9e9"
        alt="image not found"
        className="arrow"
      />
      <div className="tooltop-text flex-row-vcenter-hcenter">
        <p className="tooltiptext flex-hcenter">{props.text}</p>
      </div>
    </div>
  )
}
