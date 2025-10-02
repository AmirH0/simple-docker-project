FROM node:18-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache curl

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["node", "index.js"]
