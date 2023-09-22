import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({
    logger: true,
});

fastify.register(cors);

fastify.get('/', function (request, reply) {
    return { hello: 'world' };
});

fastify.listen({ port: 8001 }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`customer server listening on ${address}`);
});
