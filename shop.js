let prodel=document.querySelector(".prod")
let fruits=[
        {
            id:1,
            image:"img/fruite-item-5.jpg",
            name:"Grapes",
            price:4.99,
            stock:30,
            qty:0
        },
        {
            id:2,
            image:"img/fruite-item-2.jpg",
            name:"Raspberries",
            price:5.93,
            stock:23,
            qty:0
        },
        {
            id:3,
            image:"img/fruite-item-4.jpg",
            name:"Apricots",
            price:3.97,
            stock:21,
            qty:0
        },
        {
            id:4,
            image:"img/fruite-item-3.jpg",
            name:"Banana",
            price:2.39,
            stock:18,
            qty:0
        },
        {
            id:5,
            image:"img/fruite-item-1.jpg",
            name:"Oranges",
            price:4.96,
            stock:20,
            qty:0
        },
        {
            id:6,
            image:"img/featur-1.jpg",
            name:"Apples",
            price:4.99,
            stock:30,
            qty:0
        },
        {
            id:7,
            image:"img/featur-2.jpg",
            name:"Grapes",
            price:4.92,
            stock:10,
            qty:0
        },
        {
            id:2,
            image:"img/fruite-item-2.jpg",
            name:"Raspberries",
            price:5.93,
            stock:23,
            qty:0
        },
        {
            id:3,
            image:"img/fruite-item-4.jpg",
            name:"Apricots",
            price:3.97,
            stock:21,
            qty:0
        }, 
]
function displayprod()
{
    fruits.forEach((f)=>{
        prodel.innerHTML+=`
        <div class="col">
        <img src="${f.image}" class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h4 class="card-title">${f.name}</h4>
            <p class="fs-5">Lorem ipsum dolor sit amet, consectetur
              commodi ipsum, tempore quaerat molestiae laudantium eum. Vitae natus
              quae adipisci placeat qui temporibus!</p>
            <h5>${f.price}</h5>
            <button type="button" class="btn btn-Output-warning
             text-success rounded-pill">
              <i class="fa-solid fa-bag-shopping me-2"></i>Add to card
            </button>
          </div>
        </div>`
    })
}
displayprod()