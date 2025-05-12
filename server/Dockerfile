FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

# TypeScript + ts-node
RUN npm install -D ts-node typescript

CMD ["npm", "run", "dev"]
