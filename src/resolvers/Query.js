function feed(parent, args, context, info) {
    return context.prisma.link.findMany()
}

function info(parent, args, context, info) {
    return `This is the API of a Hackernews Clone`
}

module.exports = {
    feed,
    info
}