FROM node:16.15.0-alpine
# creating app directory 
WORKDIR /usr/src/app

#install app dependencies

COPY package.json .
COPY package-lock.json .

# npm install
RUN npm ci --silent

#bundle app source
COPY . .

#export port 5000 ya ta -p garda ni hunxa img run garda
EXPOSE 5000

CMD ['node','index.js']

