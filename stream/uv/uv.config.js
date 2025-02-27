self.__uv$config = {
    prefix: 'embed/',
    
    // BARE SERVER
    bare:'https://sysadmin.us.kg',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'uv.handler.js',
    bundle: 'uv.bundle.js',
    config: 'uv.config.js',
    sw: 'uv.sw.js',
};
