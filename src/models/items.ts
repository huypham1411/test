import { Schema, model, models } from 'mongoose';

const ItemSchema = new Schema({
  name: {
    type: String,
    unique: [true],
    required: [true],
  },
  rarity: {
    type: String,
    require: [true],
  },
  price: {
    type: String,
    require: [true],
  },
  owner: {
    type: String,
    require: [true],
  },
  itemImage: {
    type: String,
    require: [true],
  },
  ownerAvatar: {
    type: String,
    require: [true],
  },
});

const Item = models.Item || model('Item', ItemSchema);

export default Item;
