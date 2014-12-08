'use strict';

module.exports = {
  db: 'mongodb://localhost/mean-test',
  http: {
    port: 3001
  },
  app: {
    name: 'MEAN - A Modern Stack - Test'
  },
  emailFrom: 'SENDER EMAIL ADDRESS', // sender address like ABC <abc@example.com>
  mailer: {
    service: 'SERVICE_PROVIDER',
    auth: {
      user: 'EMAIL_ID',
      pass: 'PASSWORD'
    }
  }
};
