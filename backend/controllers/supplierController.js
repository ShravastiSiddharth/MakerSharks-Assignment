const Supplier = require('../models/supplier');

exports.querySuppliers = async (req, res) => {
  try {
    const { location, nature_of_business, manufacturing_processes, limit = 10, page = 1 } = req.body;

    const query = {
      ...(location && { location }),
      ...(nature_of_business && { nature_of_business }),
      ...(manufacturing_processes && { manufacturing_processes }),
    };

    const options = {
      limit: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
    };

    const suppliers = await Supplier.find(query, null, options);

    res.status(200).json({
      success: true,
      total_results: suppliers.length,
      results: suppliers,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error, please try again later',
      error: err.message,
    });
  }
};


exports.SpecificSuppliers = async (req, res) => {
  try {
    const { location, nature_of_business, manufacturing_processes, limit = 10, page = 1 } = req.body;

    
    const query = {};
    
    if (location) {
      query.location = location;
    }
    
    if (nature_of_business) {
      query.nature_of_business = nature_of_business;
    }
    
    if (manufacturing_processes) {
      query.manufacturing_processes = manufacturing_processes;
    }

    const options = {
      limit: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
    };

    const suppliers = await Supplier.find(query, null, options);

    res.status(200).json({
      success: true,
      total_results: suppliers.length,
      results: suppliers,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error, please try again later',
      error: err.message,
    });
  }
};
