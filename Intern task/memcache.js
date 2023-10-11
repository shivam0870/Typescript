"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Memcached = require("memcached");
var memcached = new Memcached('localhost:11211');
memcached.set('myKey', 'myValue', 3600, function (err) {
    if (err) {
        console.error('Error setting data in Memcache:', err);
    }
    else {
        console.log('Data set in Memcache');
        memcached.get('myKey', function (err, data) {
            if (err) {
                console.error('Error getting data from Memcache:', err);
            }
            else {
                console.log('Data from Memcache:', data);
                memcached.del('myKey', function (err) {
                    if (err) {
                        console.error('Error deleting data from Memcache:', err);
                    }
                    else {
                        console.log('Data deleted from Memcache');
                    }
                });
            }
        });
    }
});
