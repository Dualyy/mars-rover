import { CompassDirections, Position } from "../input/input_types";

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