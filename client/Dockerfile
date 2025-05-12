FROM ubuntu:latest
LABEL authors="v.gutorov"

# 1. Базовый образ
FROM node:18

# 2. Установка зависимостей
WORKDIR /app
COPY package*.json ./
RUN npm install

# 3. Копируем остальной код
COPY . .

# 4. Запуск dev-сервера
CMD ["npm", "run", "dev"]