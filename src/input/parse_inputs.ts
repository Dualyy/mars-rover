import { isValidInstructions, isValidStartingPosition } from "../utility/typeguards";
import { Instruction, Position } from "./input_types";

export function parseStartingPosition(inputPosition: string[]): Position {
    const [x, y, direction] = inputPosition
    const inputPositionArray = [Number(x), Number(y), direction.toUpperCase()]

    if (!isValidStartingPosition(inputPositionArray)) {
        throw new Error("Invalid input. ")
    } else {
        const [xCoordinate, yCoordinate, facingDirection] = inputPositionArray
        return {
            x: xCoordinate,
            y: yCoordinate,
            facing: facingDirection
        };
    }
}


export function parseInstructions(instructionInput: string): Instruction[] {
    const instructionUpper = instructionInput.toUpperCase()
    if (isValidInstructions(instructionUpper)) {
        const instructions = instructionUpper
        return instructions
    } else {
        throw new Error("invalid instruction string")
    }
}
