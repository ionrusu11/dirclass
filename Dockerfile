
# use node 16 alpine image
FROM node:22-alpine

# create work directory in app folder
WORKDIR /app

# install required packages for node image
RUN apk --no-cache add openssh g++ make python3 git

# copy over package.json files
COPY package.json /app/
COPY package-lock.json /app/

# install all depencies
RUN npm ci && npm cache clean --force

# copy over all files to the work directory
ADD . /app

# build the project
RUN npm run build

# expose the host and port 3000 to the server
EXPOSE 3005
ENV HOST=localhost PORT=3005


# run the build project with node
CMD ["node", ".output/server/index.mjs"]
# ENTRYPOINT ["npm", "run", "start"]