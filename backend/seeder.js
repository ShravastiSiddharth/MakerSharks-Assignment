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
    nature_of_business: 'small_scale',
    manufacturing_processes: ['3d_printing', 'casting'],
  },
  {
    supplier_id: 'SUPP003',
    company_name: 'Precision Tools',
    website: 'https://precisiontools.com',
    location: 'Hyderabad',
    nature_of_business: 'small_scale',
    manufacturing_processes: ['3d_printing', 'coating'],
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
    company_name: 'GreenTech',
    website: 'https://greentech.com',
    location: 'Ahmedabad',
    nature_of_business: 'small_scale',
    manufacturing_processes: ['casting', 'coating'],
  },
  {
    supplier_id: 'SUPP006',
    company_name: 'Innovate Manufacturing',
    website: 'https://innovate.com',
    location: 'Bangalore',
    nature_of_business: 'small_scale',
    manufacturing_processes: ['moulding', '3d_printing'],
  },
  {
    supplier_id: 'SUPP007',
    company_name: 'UrbanMakers',
    website: 'https://urbanmakers.com',
    location: 'Chennai',
    nature_of_business: 'small_scale',
    manufacturing_processes: ['moulding', 'coating'],
  },
  {
    supplier_id: 'SUPP008',
    company_name: 'Steel Craft',
    website: 'https://steelcraft.com',
    location: 'Kolkata',
    nature_of_business: 'small_scale',
    manufacturing_processes: ['casting', 'moulding'],
  },
  {
    supplier_id: 'SUPP009',
    company_name: 'Eco Manufacturing',
    website: 'https://ecomanufacturing.com',
    location: 'Mumbai',
    nature_of_business: 'small_scale',
    manufacturing_processes: ['coating', 'casting'],
  },
  {
    supplier_id: 'SUPP010',
    company_name: 'MetalWorks',
    website: 'https://metalworks.com',
    location: 'Delhi',
    nature_of_business: 'small_scale',
    manufacturing_processes: ['3d_printing', 'moulding'],
  },

  // Medium Scale Suppliers
  {
    supplier_id: 'SUPP011',
    company_name: 'MegaCorp',
    website: 'https://megacorp.com',
    location: 'Bangalore',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['moulding', '3d_printing'],
  },
  {
    supplier_id: 'SUPP012',
    company_name: 'AutoMakers',
    website: 'https://automakers.com',
    location: 'Pune',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['coating', 'casting'],
  },
  {
    supplier_id: 'SUPP013',
    company_name: 'Global Foundries',
    website: 'https://globalfoundries.com',
    location: 'Chennai',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['moulding', 'casting'],
  },
  {
    supplier_id: 'SUPP014',
    company_name: 'Precision Industries',
    website: 'https://precisionind.com',
    location: 'Hyderabad',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['3d_printing', 'coating'],
  },
  {
    supplier_id: 'SUPP015',
    company_name: 'Techtronics',
    website: 'https://techtronics.com',
    location: 'Delhi',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['moulding', 'casting'],
  },
  {
    supplier_id: 'SUPP016',
    company_name: 'SteelWorks',
    website: 'https://steelworks.com',
    location: 'Kolkata',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['moulding', '3d_printing'],
  },
  {
    supplier_id: 'SUPP017',
    company_name: 'Precision Tools',
    website: 'https://precisiontools.com',
    location: 'Ahmedabad',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['casting', 'coating'],
  },
  {
    supplier_id: 'SUPP018',
    company_name: 'Eco Manufacturing',
    website: 'https://ecomanufacturing.com',
    location: 'Mumbai',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['coating', '3d_printing'],
  },
  {
    supplier_id: 'SUPP019',
    company_name: 'UrbanMakers',
    website: 'https://urbanmakers.com',
    location: 'Pune',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['coating', 'casting'],
  },
  {
    supplier_id: 'SUPP020',
    company_name: 'Innovate Manufacturing',
    website: 'https://innovate.com',
    location: 'Bangalore',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['moulding', '3d_printing'],
  },

  // Large Scale Suppliers
  {
    supplier_id: 'SUPP021',
    company_name: 'Industrial Solutions',
    website: 'https://industrialsolutions.com',
    location: 'Mumbai',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['coating', 'casting'],
  },
  {
    supplier_id: 'SUPP022',
    company_name: 'Global Foundries',
    website: 'https://globalfoundries.com',
    location: 'Chennai',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['moulding', 'casting'],
  },
  {
    supplier_id: 'SUPP023',
    company_name: 'Techtronics',
    website: 'https://techtronics.com',
    location: 'Delhi',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['moulding', '3d_printing'],
  },
  {
    supplier_id: 'SUPP024',
    company_name: 'MegaCorp',
    website: 'https://megacorp.com',
    location: 'Bangalore',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['moulding', 'coating'],
  },
  {
    supplier_id: 'SUPP025',
    company_name: 'AutoMakers',
    website: 'https://automakers.com',
    location: 'Pune',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['coating', 'casting'],
  },
  {
    supplier_id: 'SUPP026',
    company_name: 'SteelWorks',
    website: 'https://steelworks.com',
    location: 'Kolkata',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['casting', '3d_printing'],
  },
  {
    supplier_id: 'SUPP027',
    company_name: 'Eco Manufacturing',
    website: 'https://ecomanufacturing.com',
    location: 'Ahmedabad',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['coating', 'casting'],
  },
  {
    supplier_id: 'SUPP028',
    company_name: 'Techtronics',
    website: 'https://techtronics.com',
    location: 'Delhi',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['moulding', 'casting'],
  },
  {
    supplier_id: 'SUPP029',
    company_name: 'Precision Tools',
    website: 'https://precisiontools.com',
    location: 'Hyderabad',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['casting', '3d_printing'],
  },
  {
    supplier_id: 'SUPP030',
    company_name: 'GreenTech',
    website: 'https://greentech.com',
    location: 'Ahmedabad',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['3d_printing', 'coating'],
  },

  // Additional entries to make up to 50
  {
    supplier_id: 'SUPP031',
    company_name: 'Advanced Manufacturing',
    website: 'https://advancedmanufacturing.com',
    location: 'Mumbai',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['moulding', 'coating'],
  },
  {
    supplier_id: 'SUPP032',
    company_name: 'Innovate Manufacturing',
    website: 'https://innovate.com',
    location: 'Bangalore',
    nature_of_business: 'small_scale',
    manufacturing_processes: ['casting', '3d_printing'],
  },
  {
    supplier_id: 'SUPP033',
    company_name: 'MetalWorks',
    website: 'https://metalworks.com',
    location: 'Delhi',
    nature_of_business: 'small_scale',
    manufacturing_processes: ['3d_printing', 'coating'],
  },
  {
    supplier_id: 'SUPP034',
    company_name: 'UrbanMakers',
    website: 'https://urbanmakers.com',
    location: 'Chennai',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['moulding', 'casting'],
  },
  {
    supplier_id: 'SUPP035',
    company_name: 'Steel Craft',
    website: 'https://steelcraft.com',
    location: 'Pune',
    nature_of_business: 'small_scale',
    manufacturing_processes: ['coating', 'moulding'],
  },
  {
    supplier_id: 'SUPP036',
    company_name: 'Eco Manufacturing',
    website: 'https://ecomanufacturing.com',
    location: 'Hyderabad',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['casting', '3d_printing'],
  },
  {
    supplier_id: 'SUPP037',
    company_name: 'TechMakers',
    website: 'https://techmakers.com',
    location: 'Kolkata',
    nature_of_business: 'small_scale',
    manufacturing_processes: ['coating', 'casting'],
  },
  {
    supplier_id: 'SUPP038',
    company_name: 'AutoMakers',
    website: 'https://automakers.com',
    location: 'Bangalore',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['moulding', '3d_printing'],
  },
  {
    supplier_id: 'SUPP039',
    company_name: 'Global Foundries',
    website: 'https://globalfoundries.com',
    location: 'Ahmedabad',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['casting', 'coating'],
  },
  {
    supplier_id: 'SUPP040',
    company_name: 'Precision Industries',
    website: 'https://precisionind.com',
    location: 'Chennai',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['moulding', 'coating'],
  },
  {
    supplier_id: 'SUPP041',
    company_name: 'Advanced Manufacturing',
    website: 'https://advancedmanufacturing.com',
    location: 'Mumbai',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['3d_printing', 'casting'],
  },
  {
    supplier_id: 'SUPP042',
    company_name: 'SteelWorks',
    website: 'https://steelworks.com',
    location: 'Pune',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['coating', 'casting'],
  },
  {
    supplier_id: 'SUPP043',
    company_name: 'GreenTech',
    website: 'https://greentech.com',
    location: 'Hyderabad',
    nature_of_business: 'small_scale',
    manufacturing_processes: ['casting', 'moulding'],
  },
  {
    supplier_id: 'SUPP044',
    company_name: 'Innovate Manufacturing',
    website: 'https://innovate.com',
    location: 'Kolkata',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['moulding', '3d_printing'],
  },
  {
    supplier_id: 'SUPP045',
    company_name: 'Eco Manufacturing',
    website: 'https://ecomanufacturing.com',
    location: 'Delhi',
    nature_of_business: 'small_scale',
    manufacturing_processes: ['casting', 'coating'],
  },
  {
    supplier_id: 'SUPP046',
    company_name: 'UrbanMakers',
    website: 'https://urbanmakers.com',
    location: 'Chennai',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['3d_printing', 'moulding'],
  },
  {
    supplier_id: 'SUPP047',
    company_name: 'MetalWorks',
    website: 'https://metalworks.com',
    location: 'Mumbai',
    nature_of_business: 'medium_scale',
    manufacturing_processes: ['coating', 'casting'],
  },
  {
    supplier_id: 'SUPP048',
    company_name: 'Precision Tools',
    website: 'https://precisiontools.com',
    location: 'Bangalore',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['moulding', '3d_printing'],
  },
  {
    supplier_id: 'SUPP049',
    company_name: 'Global Foundries',
    website: 'https://globalfoundries.com',
    location: 'Pune',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['casting', 'coating'],
  },
  {
    supplier_id: 'SUPP050',
    company_name: 'Techtronics',
    website: 'https://techtronics.com',
    location: 'Ahmedabad',
    nature_of_business: 'large_scale',
    manufacturing_processes: ['moulding', '3d_printing'],
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
