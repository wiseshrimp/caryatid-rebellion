import { MARGIN, PLACARDS, SPRITE_SHEETS, STILLS, TOTAL_ASSETS } from '../constants'

function calculateYOffset(height, pidx) {
    let yOffset = 0
    PLACARDS.forEach(placard => {
        let idx = placard.after.idx
        if (pidx >= idx) {
            yOffset += height * 5 / 12 + MARGIN.y * 2
        }
    })
    return yOffset
}

function calculateTransform(canvasWidth, canvasHeight, idx, isPlacard = false) {
    let margin = canvasWidth / 10 < MARGIN.x ? MARGIN.x : canvasWidth / 10
    let transform = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
    }
    let rectWidth = 1440,
        rectHeight = isPlacard ? 200 : 480
    let toResize = rectWidth + MARGIN.y * 2 > canvasWidth
    let isScreenSmall = canvasWidth <= 600

    transform.w = toResize ? canvasWidth - margin : rectWidth
    transform.w = isScreenSmall ? canvasWidth : transform.w
    transform.h = (rectHeight / rectWidth) * transform.w
    transform.x = (canvasWidth - transform.w) / 2
    transform.x = isScreenSmall ? 0 : transform.x
    transform.y = canvasHeight + transform.h * idx + MARGIN.y * 2 * (idx + 1)
    transform.y += calculateYOffset(transform.h, idx)
    let scale = transform.w / rectWidth
    return {
        transform,
        scale
    }
}

function calculatePlacardTransform(canvasWidth, canvasHeight, idx, after) {
    let { transform, scale } = calculateTransform(canvasWidth, canvasHeight, idx, true)
    let cardHeight = transform.h * 2.4
    let yOffset = after.idx * cardHeight + (after.idx + 1) * MARGIN.y * 2
    PLACARDS.forEach(placard => {
        let i = placard.id.split('_')
        let pidx = Number(i[i.length - 1]) - 1
        if (idx > pidx) {
            yOffset += transform.h + MARGIN.y * 2
        }
    })
    transform.y = yOffset + canvasHeight
    return { transform, scale }
}

function calculateLowerBound(spriteHeight, placardHeight) {
    let numOfSprites = SPRITE_SHEETS.length + STILLS.length
    let numOfPlacards = PLACARDS.length
    let lowerBound =
        numOfSprites * spriteHeight +
        numOfPlacards * placardHeight +
        TOTAL_ASSETS * MARGIN.y * 2 +
        MARGIN.y * 4
    return lowerBound
}

export { calculateTransform, calculateYOffset, calculateLowerBound, calculatePlacardTransform }