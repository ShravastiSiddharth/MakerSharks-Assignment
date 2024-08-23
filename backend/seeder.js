const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Supplier = require('./models/supplier');


dotenv.config();


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const suppliers = [
  {
    supplier_id: 'SUPP001',
    company_name: 'ABC Manufacturing',
    website: 'https://abcmanufacturing.com',
    location: 'Mumbai',
    nature_of_business: 'small_scale',
    manufacturing_processes: ['moulding', 'coating'],
  },
  {
    supplier_id: 'SUPP002',
    company_name: 'XYZ Industries',
    website: 'https://xyzindustries.com',
    location: 'Delhi',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['3d_printing', 'casting'],
  },
 
  {
    supplier_id: 'SUPP003',
    company_name: 'MegaCorp',
    website: 'https://megacorp.com',
    location: 'Bangalore',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['moulding', '3d_printing'],
  },
  {
    supplier_id: 'SUPP004',
    company_name: 'TechMakers',
    website: 'https://techmakers.com',
    location: 'Pune',
    nature_of_business: 'small_scale',
    manufacturing_processes: ['coating', 'casting'],
  },
  {
    supplier_id: 'SUPP005',
    company_name: 'Global Foundries',
    website: 'https://globalfoundries.com',
    location: 'Chennai',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['moulding', 'casting'],
  },
  {
    supplier_id: 'SUPP006',
    company_name: 'Precision Tools',
    website: 'https://precisiontools.com',
    location: 'Hyderabad',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['3d_printing', 'coating'],
},
{
    supplier_id: 'SUPP007',
    company_name: 'SteelWorks',
    website: 'https://steelworks.com',
    location: 'Kolkata',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['moulding', '3d_printing'],
},
{
    supplier_id: 'SUPP008',
    company_name: 'GreenTech',
    website: 'https://greentech.com',
    location: 'Ahmedabad',
    nature_of_business: 'small_scale',
    manufacturing_processes: ['casting', 'coating'],
},


];

const seedDB = async () => {
  try {
    await Supplier.deleteMany({});
    await Supplier.insertMany(suppliers);
    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding database:', err.message);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
