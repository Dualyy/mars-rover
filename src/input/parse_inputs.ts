import { Plateau } from "../plateau/plateau_types";
import { isValidGridSize, isValidInstructions, isValidStartingPosition } from "../utility/typeguards";
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
    if (!isValidInstructions(instructionUpper)) {
        throw new Error("invalid instruction string")
    }
    const instructions = instructionUpper.split("")
    return instructions as Instruction[]
}

export function parsePlateauCreation(size: unknown): Plateau {
    if (isValidGridSize(size)) {
        const [x, y] = size
        return { x: Math.abs(x), y: Math.abs(y) }
    } throw new Error("invalid grid size - Please enter valid Integers")
}