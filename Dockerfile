# Stage 1: Build React app
FROM --platform=linux/amd64 node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve build with NGINX
FROM --platform=linux/amd64 nginx:stable-alpine

# Clear default site
RUN rm -rf /usr/share/nginx/html/*

# Copy built frontend
COPY --from=build /app/dist /usr/share/nginx/html


# Copy custom NGINX config to handle routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
