# Stage 1: Build the portfolio
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci || npm install

COPY . .
RUN npm run build

# Stage 2: Serve the built portfolio using NGINX
FROM nginx:alpine

# Copy build output from Stage 1 into NGINX web root
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 by default
EXPOSE 80

# NGINX runs automatically via CMD inside the base image
