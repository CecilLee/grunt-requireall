(function(){


  var ul = document.createElement('ul'),

    htmlDesc = '<section class="hello-desc"><header></header><ul><li class="first:&quot;sdf">title: the first</li><li class="last-li" onclick="alert(&quot;hello&quot;)">price: 200$</li></ul><style>.hello-list,.hello-list li{list-style:none;padding:0;margin:0}.hello-list{border:1px solid red}.hello-list li{padding:10px 5px;padding-left:15px}.hello-list li:nth-child(1),.hello-list li:nth-child(2){padding-left:5px;background:#c00;color:#fff}</style></section>',

    tmplDesc = function (it) {
var out='<section class="hello-desc"> <header></header> <ul class="hello-list"> <li>title: '+(it.title)+'</li> <li>price: '+(it.price)+'</li> ';var arr1=it.arr;if(arr1){var val,idx=-1,l1=arr1.length-1;while(idx<l1){val=arr1[idx+=1];out+='<li class="custom-item">'+(idx+1)+': '+(val)+'</li>';} } out+=' </ul></section><style> .hello-list,.hello-list li { list-style: none; padding: 0; margin: 0;}.hello-list{ border: 1px solid #f00;}.hello-list li{ padding: 10px 5px; padding-left: 15px;}.hello-list li:nth-child(1),.hello-list li:nth-child(2){ padding-left:5px; background:#c00; color: #fff;}</style>';return out;
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
