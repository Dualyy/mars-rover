import { CompassDirections, INSTRUCTIONS, Position, ValidGridSize, ValidInstructions, ValidStartingPositionInput } from "../input/input_types";

export function isPosition(toCheck: unknown): toCheck is Position {
    if (toCheck !== null && toCheck !== undefined) {
        if (typeof (toCheck) === "object") {
            if ("x" in toCheck && "y" in toCheck && "facing" in toCheck) {
                return true
            }
        }
    }
    return false
}

export function isCompassDirection(toCheck: unknown): toCheck is CompassDirections {
    if (typeof (toCheck) === "string" && toCheck.length === 1) {
        if (["N", "E", "S", "W"].includes(toCheck)) {
            return true;
        }
    }
    return false
}

export function isValidStartingPosition(toCheck: unknown): toCheck is ValidStartingPositionInput {
    const directions = ["N", "E", "S", "W"]

    if (!Array.isArray(toCheck)) {
        return false;
    }
    if (toCheck.length > 3) {
        return false;
    }
    const [x, y, coordinate] = toCheck;

    return Number.isInteger(x) && Number.isInteger(y) && directions.includes(coordinate);
}


export function isValidInstructions(toCheck: unknown): toCheck is ValidInstructions {
    if (typeof (toCheck) !== "string") {
        return false;
    } else {
        const instructionInput = toCheck.toUpperCase().split("");
        for (let i = 0; i < instructionInput.length; i++) {
            if (!["L", "R", "M"].includes(instructionInput[i])) {
                return false;
            }
        }
    }
    return true;
}

export function isValidGridSize(toCheck: unknown): toCheck is ValidGridSize {
    if(!Array.isArray(toCheck) || toCheck.length !== 2){
        return false;
    }
    const [x,y] = toCheck
    return Number.isInteger(x) && Number.isInteger(y)
}