# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy dependency files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the entire project
COPY . .

# Add the entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose the app's port
EXPOSE 3000

# Set the entrypoint to the custom script
ENTRYPOINT ["/entrypoint.sh"]

# Default command (development mode)
CMD ["dev"]
