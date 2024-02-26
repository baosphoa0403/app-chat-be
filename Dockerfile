#BASE IMAGE
FROM node:18 

#create app directory 
WORKDIR /app

#copy all source code
COPY . /app 

#run dependences
Run yarn install

RUN yarn run build 

#Run end of file 
CMD ["node", "dist/main.js"]







