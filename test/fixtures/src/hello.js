(function(){


  var ul = document.createElement('ul'),

    htmlDesc = '<%= requireall('desc.html') %>',

    tmplDesc = <%= requireall('desc.tmpl') %>;


  ul.innerHTML = tmplDesc({
    title: 'names',
    price: '2000$',
    arr: [
      'cc',
      'takumi4ichi',
      'takumi4',
      'takumi ichinose'
    ]
  })


  document.body.appendChild(ul);

}());
