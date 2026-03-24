require('dotenv').config();
const sequelize = require('./config/db');
const Admin = require('./models/Admin'); 

const seedAdmin = async () => {
  try {
   
    await sequelize.authenticate();
    console.log(' Database connected successfully.');

   
    await Admin.sync();

    
    const adminExists = await Admin.findOne({ where: { username: 'admin' } });

    if (adminExists) {
      console.log('⚠️ Admin user pehle se exist karta hai. Seed skip ho gaya.');
      process.exit(0); 
    }

    
    await Admin.create({
      username: 'admin',
      password: 'password123' 
    });

    console.log(' Admin user successfully create ho gaya hai!');
    console.log('--------------------------------');
    console.log('🔑 Username: admin');
    console.log('🔑 Password: password123');
    console.log('--------------------------------');

    process.exit(0); 

  } catch (error) {
    console.error('❌ Admin create karne mein error aayi:', error);
    process.exit(1); 
  }
};


seedAdmin();