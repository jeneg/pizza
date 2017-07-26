const statuses = {
  'new': 'new',
  'confirming': 'confirming',
  'inPayment': 'inPayment',
  'inProgress': 'inProgress',
  'delivery': 'delivery',
  'completed': 'completed',
  'cancelled': 'cancelled',
};

const statusesArray = Object.keys(statuses);

module.exports.statuses = statuses;
module.exports.statusesArray = statusesArray;
