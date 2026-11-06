//Rover instructions
const INSTRUCTIONS = ["L", "R", "M"] as const;

type Instruction = (typeof INSTRUCTIONS)[number]; 

//Compass directions
const COMPASS_DIRECTIONS = ["N", "E","S","W"] as const;

type Directions = (typeof COMPASS_DIRECTIONS)[number];