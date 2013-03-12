var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('shifts', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },

    city:        'string',
    contact:     'string',
    createdAt:   'datatime',
    endDate:     'datetime',
    phoneNumber: 'string',
    place:       'string',
    remark:      'text',
    specialty:   'string',
    startDate:   'datetime',
    state:       'string',
    updatedAt:   'datetime'
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('shifts', callback);
};
