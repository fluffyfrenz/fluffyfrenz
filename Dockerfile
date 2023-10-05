# Build Stage
FROM node:16.20.2-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
RUN npm run build

# Run Stage
FROM node:16.20.2-alpine
WORKDIR /app
COPY --from=build /app ./
USER node
EXPOSE 3000
CMD ["npm", "start"]
