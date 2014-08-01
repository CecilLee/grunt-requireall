(function(){


  var ul = document.createElement('ul'),

    tmplDesc = <%= requireall('desc.dot', "tmpl") %>;


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
