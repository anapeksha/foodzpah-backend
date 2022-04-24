FROM node:16.14
WORKDIR /app
COPY package.json /app
RUN yarn install --production --frozen-lockfile && yarn cache clean --all
COPY . /app
CMD yarn start
ENV SECRET anapeksha
ENV DB_URI mongodb+srv://anapeksha:2ME644L6QA@shoppingcluster.hh0uw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
EXPOSE 8000