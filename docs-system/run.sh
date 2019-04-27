./node_modules/.bin/pm2 delete hz-react-mobile-docs-18001
NODE_ENV=production ./node_modules/.bin/pm2 start server/index.js --name hz-react-mobile-docs-18001
