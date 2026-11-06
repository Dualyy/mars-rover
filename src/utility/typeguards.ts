import { CompassDirections, Position, ValidStartingPositionInput } from "../input/input_types";

export function isPosition(toCheck: unknown): toCheck is Position {
    if (toCheck !== null && toCheck !== undefined) {
        if (typeof(toCheck) === "object") {
            if ("x" in toCheck && "y" in toCheck && "facing" in toCheck) {
                return true
            }
        }
    }
    return false
}

export function isCompassDirection(toCheck: unknown): toCheck is CompassDirections {
    if (typeof(toCheck) === "string" && toCheck.length === 1) {
        if (["N", "E", "S", "W"].includes(toCheck)) {
            return true;
        }
    }
    return false
}

export function isValidStartingPosition(toCheck: unknown):toCheck is ValidStartingPositionInput {
    const directions = ["N", "E", "S", "W"]
    
    if(!Array.isArray(toCheck)){
        return false;
    }
    if(toCheck.length > 3){
        return false;
    }
    const [x,y,coordinate] = toCheck;
  
   return Number.isInteger(x) && Number.isInteger(y) && directions.includes(coordinate);
}