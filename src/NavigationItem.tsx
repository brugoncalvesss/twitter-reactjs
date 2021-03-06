import React from "react";

const NavigationItem = ({text, Icon} : {text: any, Icon: any}) => {
  return (
    <a href="#" className="btn btn-ghost-primary rounded-pill">
      <Icon size="24" />
      <span>{text}</span>
    </a>
  )
}

export default NavigationItem;
