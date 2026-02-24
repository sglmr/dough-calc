# Use a lightweight Nginx image
FROM nginx:alpine

# Copy the contents of your /public folder to the Nginx html directory
COPY ./public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
