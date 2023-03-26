import React, { ReactNode, useState } from 'react'
import { ClassNames } from '@emotion/react';


import "./ToolTip.css"

export type ToolTipBehaviorType = "hover";
export type ToolTipPlacementType = "top" | "bottom" | "left" | "right";

export interface IToolTipProps {
    behavior?: ToolTipBehaviorType;
    className?: string;
    children: ReactNode;
    content: string;
    placement: ToolTipPlacementType;
}


const ToolTip: React.FC<IToolTipProps> = ({children, ...props}:IToolTipProps) =>{

    const [isHovered, setHovered] = useState(false);

    return (
        <div>
            {children}
        </div>
    )
}

export default ToolTip;