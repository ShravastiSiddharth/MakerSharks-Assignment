exports.validateInput = (req, res, next) => {
    const { location, nature_of_business, manufacturing_processes } = req.body;
  
    if (!location || !nature_of_business || !manufacturing_processes) {
      return res.status(400).json({
        success: false,
        message: 'location, nature_of_business, and manufacturing_processes are required fields',
      });
    }
  
    const validBusinessTypes = ['small_scale', 'medium_scale', 'large_scale'];
    const validProcesses = ['moulding', '3d_printing', 'casting', 'coating'];
  
    if (!validBusinessTypes.includes(nature_of_business)) {
      return res.status(400).json({
        success: false,
        message: `nature_of_business must be one of ${validBusinessTypes.join(', ')}`,
      });
    }
  
    if (!validProcesses.includes(manufacturing_processes)) {
      return res.status(400).json({
        success: false,
        message: `manufacturing_processes must be one of: ${validProcesses.join(', ')}`,
      });
    }
  
    next();
  };
  