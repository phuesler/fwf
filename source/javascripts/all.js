//= require_tree .

var connection = new DataConnection();

connection.onopen = function(e) { /* e.userid */ };
connection.onmessage = function(message, userid) {};

// share data with all connected users
connection.send(file || data || 'text message');

// share data between two unique users (i.e. direct messages)
connection.channels['user-id'].send(file || data || 'text-message');

// custom signaling gateway
connection.openSignalingChannel = function(callback) {
    return io.connect().on('message', callback);
};

// check existing connections
connection.check('room-name');

document.getElementById('setup-new-connection').onclick = function() {
    connection.setup('room-name');
};

