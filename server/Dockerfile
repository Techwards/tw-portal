# Base image from docker hub
FROM node:14

# App directory within the image
WORKDIR /usr/app

# Copy package file and install app dependencies
COPY package*json .

# RUN mkdir -p /usr/data
RUN npm install

COPY src src

CMD ["npm", "start"]

EXPOSE 3200

