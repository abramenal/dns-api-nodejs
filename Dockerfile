FROM node:10.16.3-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:10.16.3-alpine AS release
WORKDIR /app

COPY --from=build /app/package*.json /app/dist ./
COPY --from=build /app/dist/src ./dist

RUN npm ci --only=production

ENV APP_SECTOR_ID=1
ENV PORT=8000
ENV NODE_ENV=production

EXPOSE 8000

CMD [ "npm", "start" ]
