import React from "react";

export const Header = ({id,content}) => {
  return (
    <div id="header-component">
        <header id={id}>{content}</header>
    </div>
    
  )
}
