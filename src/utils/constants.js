
const SPRITE_SHEETS = [
    {
        id: 'CARD_1',
        src: 'sprites/card1/card1.json'
    },
    {
        id: 'CARD_2',
        src: 'sprites/card2/card2.json'
    },
    {
        id: 'CARD_3',
        src: 'sprites/card3/card3.json'
    },
    {
        id: 'CARD_4',
        src: 'sprites/card4/card4.json'
    },
    {
        id: 'CARD_5',
        src: 'sprites/card5/card5.json'
    },
    {
        id: 'CARD_6',
        src: 'sprites/card6/card6.json'
    },
    {
        id: 'CARD_7',
        src: 'sprites/card7/card7.json'
    },
    {
        id: 'CARD_9',
        src: 'sprites/card9/card9.json'
    },
    {
        id: 'CARD_10',
        src: 'sprites/card10/card12.json'
    },
    {
        id: 'CARD_12',
        src: 'sprites/card12/card12.json'
    },
    {
        id: 'CARD_19',
        src: 'sprites/card20/card20.json'
    },
    {
        id: 'CARD_21',
        src: 'sprites/card22/card22.json'
    },
    {
        id: 'CARD_25',
        src: 'sprites/card26/card26.json'
    },
    {
        id: 'CARD_27',
        src: 'sprites/card28/card28.json'
    },
    {
        id: 'CARD_28',
        src: 'sprites/card29/card29.json'
    },
    {
        id: 'CARD_29',
        src: 'sprites/card30/card30.json'
    },
    {
        id: 'CARD_31',
        src: 'sprites/card32/card32.json'
    },
    {
        id: 'CARD_33',
        src: 'sprites/card34/card34.json'
    },
    {
        id: 'CARD_35',
        src: 'sprites/card36/card36.json'
    }
]

const TYPES = {
    CARD: 'CARD',
    PLACARD: 'PLACARD'
}

const STILLS = [
    {
        id: 'CARD_8',
        src: './stills/Still8.png'
    },
    {
        id: 'CARD_11',
        src: './stills/Still11.png'
    },
    {
        id: 'CARD_13',
        src: './stills/Still13.png'
    },
    {
        id: 'CARD_14',
        src: './stills/Still14.png'
    },
    {
        id: 'CARD_15',
        src: './stills/Still15.png'
    },
    {
        id: 'CARD_16',
        src: './stills/Still16.png'
    },
    {
        id: 'CARD_17',
        src: './stills/Still17.png'
    },
    {
        id: 'CARD_18',
        src: './stills/Still19.png'
    },
    {
        id: 'CARD_20',
        src: './stills/Still21.png'
    },
    {
        id: 'CARD_22',
        src: './stills/Still23.png'
    },
    {
        id: 'CARD_23',
        src: './stills/Still24.png'
    },
    {
        id: 'CARD_24',
        src: './stills/Still25.png'
    },
    {
        id: 'CARD_26',
        src: './stills/Still27.png'
    },
    {
        id: 'CARD_30',
        src: './stills/Still31.png'
    },
    {
        id: 'CARD_32',
        src: './stills/Still33.png'
    },
    {
        id: 'CARD_34',
        src: './stills/Still35.png'
    }
]

const PLACARDS = [
    {
        id: 'PLACARD_1',
        src: './placards/placard1/card9.json',
        after: {
            idx: 8
        }
    },
    {
        id: 'PLACARD_2',
        src: './placards/placard2/card10.json',
        after: {
            idx: 8
        }
    },
    {
        id: 'PLACARD_3',
        src: './placards/placard3/placard3.json',
        after: {
            idx: 33
        }
    }
]

// const OVERLAYS = {
//     COLUMN1: {
//         src: './overlays/Column_Warped2.png'
//     }
// }

const MARGIN = {
    x: 20,
    y: 30
}

const FRAMERATE = 15

const TOTAL_ASSETS = SPRITE_SHEETS.length + PLACARDS.length + STILLS.length

const FIRST_SPRITE = 'CARD_1'
const FIRST_PLACARD = 'PLACARD_1'

export {FIRST_SPRITE, FIRST_PLACARD, FRAMERATE, MARGIN, PLACARDS, STILLS, SPRITE_SHEETS, TYPES, TOTAL_ASSETS}