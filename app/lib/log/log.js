const { format } = require('util');

function createLog(namespace) {
  return new Log(namespace);
}

createLog.transports = [];

createLog.addTransports = function addTransports(...transports) {
  createLog.transports = createLog.transports.concat(transports);
};

class Log {
  constructor(namespace) {
    this.namespace = namespace;
  }

  info(...args) {
    const message = format(...args);

    createLog.transports.forEach(transport => {
      transport.info(`${this.namespace} ${message}`);
    });
  }

  error(...args) {
    const message = format(...args);

    createLog.transports.forEach(transport => {
      transport.error(`${this.namespace}:error ${message}`);
    });
  }
}

module.exports = createLog;
