// ### Страница подробной информации о чае

// * Название
// * Место культивации
// * Картинка
// * Описание
// * Комментарии пользователей
// * Возможность добавить комментарий, если аутентифицированный пользователь

const mongoose = require('mongoose');

const teasSchema = new mongoose.Schema({
  nameTea: { type: String },
  region: { type: String },
  description: { type: String },
  img: { type: String },
  coments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comments',
  }],
  coordinatX: Number,
  coordinatY: Number,
});

const Teas = mongoose.model('Tea', teasSchema);

module.exports = Teas;
