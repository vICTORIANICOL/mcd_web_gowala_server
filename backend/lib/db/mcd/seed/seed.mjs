import productModel from "../../models/product.model.mjs";
import {
  stubMessages,
  stubUsers,
  stubSubscribers,
  stubProducts,
  stubEmployees,
  stubArticles,
  stubOrders,
} from "./seed.data.js";
import {
  seedMessage,
  seedUser,
  seedSubscriber,
  seedEmployee,
  seedProduct,
  seedArticle,
  seedOrder,
} from "./seed.helper.js";

export const seedUsers = async () => {
  for (let i = 0; i < stubUsers.length; i++) {
    await seedUser(stubUsers[i]);
  }
};

export const seedProducts = async () => {
  for (let i = 0; i < stubProducts.length; i++) {
    await seedProduct(stubProducts[i]);
  }
};

export const seedMessages = async () => {
  for (let i = 0; i < stubMessages.length; i++) {
    await seedMessage(stubMessages[i]);
  }
};

export const seedEmployees = async () => {
  for (let i = 0; i < stubEmployees.length; i++) {
    await seedEmployee(stubEmployees[i]);
  }
};

export const seedSubscribers = async () => {
  for (let i = 0; i < stubSubscribers.length; i++) {
    await seedSubscriber(stubSubscribers[i]);
  }
};

export const seedArticles = async () => {
  for (let i = 0; i < stubArticles.length; i++) {
    await seedArticle(stubArticles[i]);
  }
};

export const seedOrders = async () => {
  const products = await productModel.find({});
  const productMap = {};

  products.forEach((product) => {
    productMap[product.title] = product._id;
  });

  for (let i = 0; i < stubOrders.length; i++) {
    const order = stubOrders[i];

    const productIds = order.items
      .map((item) => ({ product: productMap[item.product] }))
      .filter((item) => item.product);

    await seedOrder({
      email: order.email,
      items: productIds,
    });
  }
};
