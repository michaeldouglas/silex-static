#Dockerfile api
FROM node:6.5.0

ENV HOME=/home/web

WORKDIR $HOME

COPY . $HOME

# RUN npm cache clean && npm install --silent --progress=false && npm install -g bower && bower install --allow-root

CMD ["npm", "start"]
