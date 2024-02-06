const db = require('./connection');
const { /*need to add in model names onces created*/ } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    //used to drop collections if they currently exist
    //caution will erase all existing data in these collections!!
    await cleanDB('','');

    // Our seed source for our data models....

});