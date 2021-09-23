function createManifest(src, id, type) {
    return {
        src,
        id,
        type,
        crossOrigin: true
    }
}

export { createManifest }