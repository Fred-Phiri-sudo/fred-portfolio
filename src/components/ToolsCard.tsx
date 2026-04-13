/**
 * @copyright 2026 codewithfred
 * @license Apache-2.0
 */

/**
 * Node Modules
 */

import type { ToolsType } from "@/types";

export const ToolsCard = ({ tool }: { tool: ToolsType }) => {
    return (
    <div className="border border-neutral-700 rounded-md 
    flex jusitfy-center items-center flex-col py-3">
        <img src={tool.imgSrc} alt={tool.label}/>

        <p className="font-bold mt-2">{tool.label}</p>
    </div>);
};