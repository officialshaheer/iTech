const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DisplaySchema = new Schema({
title: String,
brand: String,
price: String,
description: String,
images: [ String ]
});

module.exports = mongoose.model('Display', DisplaySchema);