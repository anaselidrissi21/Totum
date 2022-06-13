const express = require('express');

const router = express.Router();
const activityController = require('../../controllers/api/activityController');

const apiErrorController = require('../../controllers/api/error');
const validator = require('../../validation/validator');

const commentGetSchema = require('../../validation/schemas/comment/commentGet.schema');
const commentPostSchema = require('../../validation/schemas/comment/commentPost.schema');
const commentManageSchema = require('../../validation/schemas/comment/commentManage.schema');

const controllerHandler = require('../../helpers/controllerHandler');
const errorHandler = require('../../helpers/errorHandler');
const jwt = require('../../services/token');

// liste des routes

router.use(apiErrorController.error404);
router.use(errorHandler);

module.exports = router;

// /**
//      * GET /api/cadex
//      * @summary To get a random cadex and personalize it
//      * @param {string} noun.query - cadex personalized noun
//      * @param {string} adjective.query - cadex personalized adjective
//      * @param {string} verb.query - cadex personalized verb
//      * @param {string} complement.query - cadex personalized complement
//      * @return {cadex} 200 - success response
//      * @return {error} 400 - input data invalid
//      */
