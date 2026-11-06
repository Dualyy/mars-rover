import { Position } from "./input_types";

export function parseStartingPosition(inputPosition: string): Position{
    return {
        x:1,
        y:1,
        facing: "E"
    };
}

