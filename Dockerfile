# First Stage: Build React App
FROM --platform=linux/amd64 node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Second Stage: Serve with Nginx
FROM --platform=linux/amd64 nginx:stable-alpine

WORKDIR /usr/share/nginx/html

# Remove default nginx website
RUN rm -rf ./*

# Copy build output
COPY --from=build /app/dist .

# Expose Port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
