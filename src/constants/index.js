import { BOTTOM_BUTTONS, BUTTONS } from "./buttons"
import { SPRITE_SHEETS, FIRST_SPRITE } from "./sprites"
import { STILLS } from "./stills"
import { PLACARDS, FIRST_PLACARD } from "./placards"
import { FRAMERATE, ORIGINAL_SIZE, MARGIN } from "./settings"
import { TEXT, INSTRUCTIONS_TEXT, TITLE } from './text'

const IMAGE_TYPES = {
    STILLS: 'stills',
    SPRITES: 'sprites',
    PLACARDS: 'placards'
}

const POPUPS = {
    AUDREY: 'AUDREY',
    HETTIE: 'HETTIE',
    DORIS: 'DORIS',
    ABOUT: 'ABOUT',
    VIDEO: 'VIDEO'
}

const TOTAL_ASSETS = SPRITE_SHEETS.length + PLACARDS.length + STILLS.length

export {
    BOTTOM_BUTTONS,
    BUTTONS,
    FIRST_PLACARD,
    FIRST_SPRITE,
    FRAMERATE,
    IMAGE_TYPES,
    INSTRUCTIONS_TEXT,
    MARGIN,
    ORIGINAL_SIZE,
    PLACARDS,
    POPUPS,
    SPRITE_SHEETS,
    STILLS,
    TEXT,
    TITLE,
    TOTAL_ASSETS
}