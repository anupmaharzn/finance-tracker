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
#expose in 3000 
EXPOSE 3000

CMD [ "npm","start","--","--watch" ]