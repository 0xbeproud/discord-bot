FROM node:16-alpine

LABEL author="Logan" maintainer="logan.beproud@krosslab.io"

RUN mkdir -p /app \
    && apk add --no-cache git

WORKDIR /app

COPY package-lock.json /app
COPY package.json /app

RUN /usr/local/bin/npm install --unsafe-perm

COPY . /app

RUN /usr/local/bin/npm run build

ENV NODE_ENV=production

EXPOSE 3000

ENTRYPOINT ["/usr/local/bin/npm"]
CMD ["start"]