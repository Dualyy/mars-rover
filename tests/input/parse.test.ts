import { vitest, describe, test, beforeEach, expect } from "vitest";
import { parseStartingPosition } from "../../src/input/parse_inputs";
import { Position } from "../../src/input/input_types";
import { isPosition } from "../../src/utility/typeguards";

describe("parseStartingPosition", () => {
    test("parseStartingPosition returns type of Position", () =>{
        const inputPosition = parseStartingPosition("5 5 E")
        console.log(inputPosition)
        expect(isPosition(inputPosition)).toBe(true)
    });
})

