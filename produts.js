var sanpham = [

        {
            id:1,
            name: "Quần Shorts Nam chạy bộ Ultra",
            code: "TC102",
            price: "280.000",
            image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/457219/item/goods_09_457219.jpg?width=750"
        },
        {
            id:2,
            name: "QUẦN SHORTS BLACK",
            code: "TC103",
            price: "450.000",
            image: "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2023/s6.917_72.jpg"
        },
        {
            id:3,
            name: "QUẦN SHORTS BEIGE",
            code: "TC104",
            price: "180.000",
            image: "https://product.hstatic.net/1000271846/product/pants-beige-01_fcff1444268b47ffacc171b2748dbe5a_master.jpg"
        },
        {
            id:4,
            name: "Váy Ngắn Nữ",
            code: "EC201",
            price: "350.000",
            image: "https://pos.nvncdn.com/8d4112-8686/ps/20230526_mGoGB5Zeji.jpeg"
        },
        {
            id:5,
            name: "Chân váy nữ xếp ly",
            code: "EC202",
            price: "200.000",
            image: "https://canifa.com/img/1000/1500/resize/6/k/6ks23w008-sk010-1-thumb.webp"
        },
        {
            id:6,
            name: "Váy Tay Bồng Cúp Ngực",
            code: "EC203",
            price: "450.000",
            image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/208/198/products/2676-dam-xoe-kieu-cup-nguc-tay-phong-xeo-ta.jpg?v=1567999285893"
        },
        
    ];

    function Add() {
        var id = document.getElementById("id").value;
        var name = document.getElementById("name").value;
        var image = document.getElementById("image").value;
        var price = document.getElementById("price").value;
        //save
        
        sanpham.push({ id: id, name: name, image: image, price: price });
        localStorage.setItem('listProduct', JSON.stringify(sanpham));
        window.location.reload();
        Reset();
        Show();
    
    }
    
    function Show() {
        var tableBody = document.getElementById("sanpham");
        tableBody.innerHTML = "";
      
        for (var i = 0; i < sanpham.length; i++) {
          var row =
            "<tr><td>" +
            sanpham[i].id +
            "</td><td>" +
            sanpham[i].name +
            "</td><td><img src='" +
            sanpham[i].image +
            "' alt='Product Image' style='width:100px;height:auto;'></td><td>" +
            sanpham[i].price +
            "</td><td><button onclick='ViewDetail(" +
            i + 
            ")' class='btn btn-info'>View Detail</button></td><td><button onclick='Edit(" +
            i +
            ")' class='btn btn-primary'>Edit</button> <button onclick='Delete(" +
            i +
            ")' class='btn btn-danger'>Delete</button></td></tr>";
          tableBody.innerHTML += row;
        }
      }
    
      function ViewDetail(index) {
        window.location.href = "product_detail.html?index=" + index;
      }
    
    function Reset() {
        document.getElementById("id").value = "";
        document.getElementById("name").value = "";
        document.getElementById("image").value = "";
        document.getElementById("price").value = "";
        localStorage.setItem('listProduct', JSON.stringify(sanpham));
        window.location.reload();
    }
    
    function Edit(index) {
        var product = sanpham[index];
        document.getElementById("id").value = product.id;
        document.getElementById("name").value = product.name;
        document.getElementById("image").value = product.image;
        document.getElementById("price").value = product.price;
    
        sanpham.splice(index, 1);
        localStorage.setItem('listProduct', JSON.stringify(sanpham));
        window.location.reload();
        Show();
    }
    
    function Delete(index) {
        sanpham.splice(index, 1);
        localStorage.setItem('listProduct', JSON.stringify(sanpham));
        window.location.reload();
        Show();
    }
    {
        function searchProduct() {
            var searchValue = document.getElementById("searchName").value.toLowerCase();
            var filteredProducts = sanpham.filter(function(product) {
                return product.name.toLowerCase().includes(searchValue);
            });
            displayProducts(filteredProducts);
        }
        
        function displayProducts(products) {
            var tableBody = document.getElementById("sanpham");
            tableBody.innerHTML = "";
        
            for (var i = 0; i < products.length; i++) {
                var row = "<tr><td>" + products[i].id + "</td><td>" + products[i].name + "</td><td><img src='" + products[i].image + "' alt='Product Image' style='width:100px;height:auto;'></td><td>" + products[i].price + "</td><td><button onclick='Edit(" + i + ")' class='btn btn-primary'>Edit</button> <button onclick='Delete(" + i + ")' class='btn btn-danger'>Delete</button></td></tr>";
                tableBody.innerHTML += row;
            }
        
        }
        
        function Reset() {
            document.getElementById("id").value = "";
            document.getElementById("name").value = "";
            document.getElementById("image").value = "";
            document.getElementById("price").value = "";
            
        }
        
    }