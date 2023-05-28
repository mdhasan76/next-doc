import mongoose from "mongoose";

import { products } from "../../data/products"
import Product from "../models/ProductModel"
const seedProducts = async () => {
    try {
      // await conne
    // Clear existing products (optional)
    await Product.deleteMany({});

    // Seed new products
    await Product.insertMany(products);

    console.log('Products seeded successfully!');
  } catch (error) {
    console.error('Error seeding products:', error);
  } finally {
    // Close the database connection (if necessary)
    mongoose.connection.close();
  }
};

// Call the seedProducts function to initiate the seeding process
seedProducts();
