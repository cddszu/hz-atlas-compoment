./node_modules/.bin/pm2 delete jj_mobile
NODE_ENV=production ./node_modules/.bin/pm2 start server/index.js --name jj_mobile
