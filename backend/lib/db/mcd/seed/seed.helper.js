import userModel from "../../models/user.model.mjs";
import dbConnect from "../../dbConnect.js";
import productModel from "../../models/product.model.mjs";
import messageModel from "../../models/message.model.mjs";
import employeeModel from "../../models/employee.model.mjs";
import subscriptionModel from "../../models/subscription.model.mjs";
import articleModel from "../../models/article.model.mjs";
import orderModel from "../../models/order.model.mjs";

/*

    Create new User

*/
export const seedUser = async (user) => {
  console.log("-- User --");
  console.log(user);
  console.log("--\n");

  await dbConnect();

  try {
    user.picture = process.env.SERVER_HOST + user.picture;
    let newUser = await userModel.create(user);

    return newUser;
  } catch (error) {
    console.log(error);
  }
};

/*

    Create new Product

*/
export const seedProduct = async (product) => {
  console.log("-- Product --");
  console.log(product);
  console.log("--\n");

  await dbConnect();

  try {
    product.image = process.env.SERVER_HOST + product.image;
    let newProduct = await productModel.create(product);

    return newProduct;
  } catch (error) {
    console.log(error);
  }
};

/*

    Create new Message

*/
export const seedMessage = async (message) => {
  console.log("-- Message --");
  console.log(message);
  console.log("--\n");

  await dbConnect();

  try {
    let newMessage = await messageModel.create(message);
    return newMessage;
  } catch (error) {
    console.log(error);
  }
};

/*

    Create new Employee

*/
export const seedEmployee = async (employee) => {
  console.log("-- Employee --");
  console.log(employee);
  console.log("--\n");

  await dbConnect();

  try {
    employee.image = process.env.SERVER_HOST + employee.image;
    let newEmployee = await employeeModel.create(employee);
    return newEmployee;
  } catch (error) {
    console.log(error);
  }
};

/*

    Create new subscriber

*/
export const seedSubscriber = async (subscriber) => {
  console.log("-- Subscriber --");
  console.log(subscriber);
  console.log("--\n");

  await dbConnect();

  try {
    let newSubscriber = await subscriptionModel.create(subscriber);
    return newSubscriber;
  } catch (error) {
    console.log(error);
  }
};

/*

    Create new article

*/

export const seedArticle = async (article) => {
  console.log("-- Article --");
  console.log(article);
  console.log("--\n");

  await dbConnect();

  try {
    article.image = process.env.SERVER_HOST + article.image;
    let newArticle = await articleModel.create(article);
    return newArticle;
  } catch (error) {
    console.log(error);
  }
};

/*

    Create new order

*/

export const seedOrder = async (order) => {
  console.log("-- Order --");
  console.log(order);
  console.log("--\n");

  await dbConnect();

  try {
    let newOrder = await orderModel.create(order);
    return newOrder;
  } catch (error) {
    console.log(error);
  }
};
