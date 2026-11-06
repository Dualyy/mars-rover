//Rover instructions
export const INSTRUCTIONS = ["L", "R", "M"] as const;

export type Instruction = (typeof INSTRUCTIONS)[number];

//Compass directions
const COMPASS_DIRECTIONS = ["N", "E", "S", "W"] as const;

export type CompassDirections = (typeof COMPASS_DIRECTIONS)[number];

//Position

export interface Position {
    readonly x: number;
    readonly y: number;
    readonly facing: CompassDirections;
}

//startingPosition
export type ValidStartingPositionInput = [number,number,CompassDirections];

export type ValidInstructions = Instruction[]