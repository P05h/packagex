self.__uv$config = {
    prefix: '/sw/',
    bare: 'https://tiw.tiwweb.workers.dev/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv2/uv.handler.js',
    bundle: '/uv2/uv.bundle.js',
    config: '/uv2/uv.config.js',
    sw: '/uv2/uv.sw.js',
};
