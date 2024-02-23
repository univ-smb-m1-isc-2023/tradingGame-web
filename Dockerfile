FROM node:21.6.2-alpine3.18

# Set the working directory
WORKDIR /app

# Copy only the package files first to leverage Docker cache
COPY package.json .
COPY package-lock.json .

# Install app dependencies
RUN npm install --silent

# Install react-scripts globally (if needed)
RUN npm install react-scripts@3.4.1 -g --silent

# Copy the rest of the application
COPY . .

# Start the app
CMD ["npm", "start"]
