'use strict';

const ottoman = require('ottoman');
const couchbase = require('couchbase');
const cbHost = process.env.cbHost || '127.0.0.1';
const cluster = new couchbase.Cluster(`couchbase://${cbHost}`);
cluster.authenticate('Administrator', 'adminguy');
const bucket = cluster.openBucket('anime');
bucket.operationTimeout = 120 * 1000;
ottoman.store = new ottoman.CbStoreAdapter(bucket, couchbase);
module.exports = ottoman;


