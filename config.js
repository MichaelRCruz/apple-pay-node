'use strict';
exports.DATABASE_URL = 'mongodb://localhost/doc-log-dev';
exports.PORT = process.env.PORT || 2014;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
