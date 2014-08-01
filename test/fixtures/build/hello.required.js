(function(){


  var ul = document.createElement('ul'),

    tmplDesc = function (it) {
var out='<section class="hello-desc"> <header></header> <ul class="hello-list"> <li>title: '+(it.title)+'</li> <li>price: '+(it.price)+'</li> </ul></section><style> .hello-list,.hello-list li { list-style: none; padding: 0; margin: 0;}.hello-list{ border: 1px solid #f00;}.hello-list li{ padding: 10px 5px; padding-left: 15px;}.hello-list li:nth-child(1),.hello-list li:nth-child(2){ padding-left:5px; background:#c00; color: #fff;}</style>';return out;
};


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
