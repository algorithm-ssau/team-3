import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// Подключение .env
dotenv.config()

// Константы из env
const PORT = process.env.PORT || 4000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/recipes'

// Создание Express-приложения
const app = express()

// Базовые middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(express.json())
app.use(cookieParser())

// Подключение роутов
import recipeRoutes from './recipes/recipe.routes'
import userRoutes from './users/user.routes'


app.use(recipeRoutes)
app.use(userRoutes)


mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB')
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`)
        })
    })
    .catch(err => {
        console.error('❌ Failed to connect to MongoDB', err)
    })