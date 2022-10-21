# 1. Install dependencies only when needed
FROM node:18-alpine AS deps

RUN apk add --no-cache libc6-compat
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

COPY package.json .
COPY yarn.lock .

RUN yarn install

# 2. Rebuild the source code only when needed
FROM node:18-alpine AS builder

COPY --from=deps /node_modules ./node_modules
COPY . .

RUN yarn build

# 3. Production image, copy all the files and run next
FROM node:18-alpine AS runner

USER node

ENV LANG='en_US.UTF-8' LANGUAGE='en_US:en' LC_ALL='en_US.UTF-8'
ENV TZ Asia/Seoul

WORKDIR /app
COPY --from=builder /node_modules ./node_modules
COPY --from=builder /dist ./dist

COPY ecosystem.config.js ecosystem.config.js

EXPOSE 8000

CMD ["./node_modules/.bin/pm2-runtime", "start", "ecosystem.config.js", "--env=.env"]