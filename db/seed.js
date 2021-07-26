const mongoose = require("mongoose");
const Teas  = require( './model/teas.model' );
const Admin = require("./model/admins.model");
const dotenv = require('dotenv')
dotenv.config();
const { dbUrl, options } = require( './config' );


async function seeder() {
  await mongoose.connect( dbUrl, options );

  const dbAdmin = [{
    name: 'Anton',
    email: 'Anton@anton.anton',
    password: '123456',
  }]

  const dbTeas = [
    {
      nameTea: `Марбок`,
      region: `Sri-Lanka`,
      description: `Цейлонские чаи ценятся во всем мире за особый тонкий вкус и выразительный аромат.
      Щедрые земли и влажный жаркий климат этого «острова чая» идеально подходят для чайного растения.
      Сегодня Шри-Ланка крупнейший импортер чая.
      Основные чайные плантации на Цейлоне располагаются в центре острова.
      Самые знаменитые из них – Нувара Элиа, Димбула, Юва, Канди, Ругуну.`,
      img: `https://www.amigo-tours.ru/workdir/photoalbum/53a15e04fff162f3dd4623ca94203ec7/big_1.jpg`,
      coordinatX:7.37,
      coordinatY:80.46,
    },
    {
      nameTea: `Ассамский чай`,
      region: `India`,
      description: `Индийские чаи делятся на две большие группы – северо-индийские и южно-индийские.
      Основную массу северных чаев составляют собранные в провинции Ассам. «Ассамский чай» – особо пряный,
      темный и крепкий с богатым блестящий настоем.`,
      img: `https://tea-expert.su/uploads/posts/medium/48-tea-expert.su-plantaciya-chaya-assam.jpg`,
      coordinatX:28.61,
      coordinatY:77.20,
      
    },
    {
      nameTea: `Пуэр`,
      region: `China`,
      description: `Чаи, выращенные в Китае, очень разнообразны,
      но общей особенностью является богатство ароматической гаммы и бархатистый вкусовой тембр.
      В Китае и сегодня бережно сохраняют традиции выращивания чая и переработки чайных листьев,
      сложившиеся за несколько тысячелетий – во время завяливания и ферментации китайский чай
      приобретает своеобразный фруктовый или фруктово-дымный запах и вкус,
      который и делает его неповторимым.`,
      img: `https://cs9.pikabu.ru/post_img/big/2018/03/26/6/152205791213175870.jpg`,
      coordinatX:35,
      coordinatY:105,
    },
    {
      nameTea: `Лю Ань Гуа Пянь`,
      region: `Indonesia`,
      description: `Индонезийский чай собирают на островах Ява и Суматра.
      Все индонезийские чая отличаются своеобразным специфическим вкусом,
      но принято считать, что суматранские уступают по качеству яванским.`,
      img: `https://www.tea-terra.ru/wp-content/uploads/2017/08/2017_08_18_01_003.jpg`,
      coordinatX:-6.12,
      coordinatY:106.50,
    },
  ];

  await Teas.insertMany(dbTeas)
  await Admin.insertMany(dbAdmin)
  await mongoose.connection.close();
}

seeder();

module.exports = seeder;
