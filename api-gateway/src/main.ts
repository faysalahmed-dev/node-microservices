import Fastify from 'fastify';
import cors from '@fastify/cors';
import proxy from '@fastify/http-proxy';

const fastify = Fastify({
    logger: true,
});

fastify.register(cors);
fastify.register(proxy, {
    upstream: 'http://localhost:8001',
    prefix: '/customers',
});
fastify.register(proxy, {
    upstream: 'http://localhost:8002',
    prefix: '/products',
});
fastify.register(proxy, {
    upstream: 'http://localhost:8003',
    prefix: '/shipping',
});

fastify.listen({ port: 8000 }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`proxy server listening on ${address}`);
});
