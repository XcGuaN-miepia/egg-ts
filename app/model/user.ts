import { Application } from 'egg';
import { Model } from 'mongoose';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 按照mock的数据，有四个字段：name/age/sex/job lastTime是用来标记最后的更改时间
  const UserSchema = new Schema({
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    sex: {
      type: String,
    },
    job: {
      type: String,
    },
    lastTime: {
      type: Number,
    },
  });
  // 映射到egg-mongo db 库的users表中（不区分大小写）
  const User = mongoose.model('Users', UserSchema);

  // init方法放到这里
  initUserData(User);
  // insertUserData(User);

  return User;
};


function initUserData(User: Model<any>) {
  // 查询数据库
  User.find({}, (err, doc) => {
    if (err) {
      console.log(err);
      console.log('init user failed');
    } else if (!doc.length) {
      new User({
        name: 'UserInitName',
        age: 23,
        sex: 'girl',
        job: '程序媛',
        lastTime: Date.now(),
      }).save();
    } else {
      console.log('-------------init user successfully--------------');
    }
  });
}

// function insertUserData(User: Model<any>) {
//   User.insertMany([{
//     name: 'UserInitName',
//     age: 23,
//     sex: 'girl',
//     job: '程序媛',
//     lastTime: Date.now(),
//   }, {
//     name: 'UserInitName',
//     age: 23,
//     sex: 'girl',
//     job: '程序媛',
//     lastTime: Date.now(),
//   }, {
//     name: 'UserInitName',
//     age: 23,
//     sex: 'girl',
//     job: '程序媛',
//     lastTime: Date.now(),
//   }, {
//     name: 'UserInitName',
//     age: 23,
//     sex: 'girl',
//     job: '程序媛',
//     lastTime: Date.now(),
//   }, {
//     name: 'UserInitName',
//     age: 23,
//     sex: 'girl',
//     job: '程序媛',
//     lastTime: Date.now(),
//   }]);
// }
