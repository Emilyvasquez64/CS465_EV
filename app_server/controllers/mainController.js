var fs = require('fs');

exports.home = function(req, res) {
  var data = JSON.parse(fs.readFileSync('./data/index.json', 'utf8'));

  res.render('index', {
    title:       'Travlr Getaways',
    hero:        data.hero,
    blog:        data.blog,
    testimonial: data.testimonial,
    sidebar:     data.sidebar
  });
};