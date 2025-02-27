self.__uv$config = {
    prefix: '/Stream-Star/stream/embed/',
    
    // BARE SERVER
    bare:'https://sysadmin.us.kg',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/Stream-Star/stream/uv.handler.js',
    bundle: '/Stream-Star/stream/uv.bundle.js',
    config: '/Stream-Star/stream/uv.config.js',
    sw: '/Stream-Star/stream/uv.sw.js',
};
