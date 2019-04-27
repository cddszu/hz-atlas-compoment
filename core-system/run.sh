./node_modules/.bin/pm2 delete hz-react-mobile-core-18002
NODE_ENV=production ./node_modules/.bin/pm2 start server/index.js --name hz-react-mobile-core-18002
