

function makePhone(name, storage, price, img) {
  return {
    name: name,
    storage: storage,
    price: price,
    img: img,
  }
}

var Apple = makePhone('iphone 12', '256gb', '1200$', 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg')
var Samsung = makePhone('galaxy s20', '256gb', '1000$', 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-fe-5g.jpg')
var Huawei = makePhone('mate 40', '128gb', '900$', 'https://fdn2.gsmarena.com/vv/bigpic/huawei-mate40-3.jpg')
var Google = makePhone('pixel 5', '128gb', '800$', 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-5-5g.jpg')

// var phones = [phone1,phone2,phone3,phone4]

function displayPhone(phone) {
  var rtn = phone.img + phone.name + phone.storage + phone.price
  console.log("rtn", rtn)
  $("#message").html( `<div class="card">
  <h2>`+phone.name+`</h2>
  <img src="`+phone.img+`" alt="Avatar" style="width:25% ">
  <div class="container">
    <h4><b>storage : `+ phone.storage+`</b></h4> 
    <p>price: `+ phone.price+`</p> 
  </div>
</div>` );
  return rtn
}
