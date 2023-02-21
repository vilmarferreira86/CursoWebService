const SequenceControler = require('../controllers/sequenceControler')
  module.exports = (app) => {
     app.post('/sequence', SequenceControler.post);
     app.put('/sequence', SequenceControler.put);
     app.delete('/sequence', SequenceControler.delete);
     app.get('/sequence', SequenceControler.get);
     app.get('/sequence/:id', SequenceControler.getById);
  }