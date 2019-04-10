

const express = require('express')
const router = express.Router()
const MODULE_PATH = '../src/store/modules'
require(`${MODULE_PATH}/loginOut/mock`)(router)
require(`${MODULE_PATH}/msgMgt/mock`)(router)
require(`${MODULE_PATH}/queryScheduler/mock`)(router)
require(`${MODULE_PATH}/search/mock`)(router)

require(`${MODULE_PATH}/businessChanceMgt/mock`)(router)
require(`${MODULE_PATH}/scheduleMgt/mock`)(router)
require(`${MODULE_PATH}/legWork/mock`)(router)
require(`${MODULE_PATH}/relation/mock`)(router)
require(`${MODULE_PATH}/customerMgt/tagMgt/mock`)(router)
require(`${MODULE_PATH}/afficheMgt/mock`)(router)
require(`${MODULE_PATH}/institutionMgt/mock`)(router)
require(`${MODULE_PATH}/customerMgt/custMgt/mock`)(router)
module.exports = router
