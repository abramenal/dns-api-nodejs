FROM node:14.5.0-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:14.5.0-alpine AS release
WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/dist/src ./dist/src

RUN npm ci --only=production

ENV APP_SECTOR_ID=1
ENV PORT=8000
ENV NODE_ENV=production

EXPOSE 8000

CMD [ "npm", "start" ]
