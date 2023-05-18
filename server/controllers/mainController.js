/**
 * GET /
 * Homepage
 */

exports.homepage = async(req, res) => {
   
  const locals = {
        title: 'Notes',
        description: 'Free Notes App'
  };


  res.render('index', {
      locals,
      layout: '../views/layouts/front-page'
  });
   
}

/**
 * GET /
 * About
 */

exports.about = async(req, res) => {
   
    const locals = {
          title: 'About - Notes',
          description: 'Free Notes App'
    };
  
  
    res.render('about', locals);
     
  }

  /**
 * GET /
 * FAQ
 */

exports.faq = async(req, res) => {
   
      const locals = {
            title: 'FAQ - Notes',
            description: 'Free Notes App'
      };
    
    
      res.render('faq', locals);
       
    }