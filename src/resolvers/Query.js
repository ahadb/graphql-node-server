function feed(parent, args, context, info) {
    return context.prisma.link.findMany()
}

function info(parent, args, context, info) {
    return `This is the API of a Hackernews Clone`
}

async function feed(parent, args, context, info) {
    const where = args.filter
      ? {
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } },
        ],
      }
      : {}
  
      const links = await context.prisma.link.findMany({
        where,
        skip: args.skip,
        take: args.take,
      })
  
    return links
  }

module.exports = {
    feed,
    info
}