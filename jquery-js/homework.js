            function openTap(number){
                $('.tab-button').removeClass('active'); 
                $('.tab-content').removeClass('show'); 
                $('.tab-button').eq(number).addClass('active'); 
                $('.tab-content').eq(number).addClass('show'); 
              }

              $('.list').click(function(e){ 
                openTap(e.target.dataset.id)
              });

            let size_shirts = [95, 100, 105];
            let size_trouser = [28, 29, 30, 31, 32, 33, 34];

            
            $('#option1').on('change', function(){
                $('#option2').html('');
                
                if ($('#option1').val() == '셔츠'){
                    size_shirts.forEach(function(i){
                        var template = `<option>${i}</option>`;
                        $('#option2').append(template);
                   })
                }else if($('#option1').val() == '바지'){
                    size_trouser.forEach(function(i){
                        var template = `<option>${i}</option>`;
                        $('#option2').append(template);
                });
                }
            });

            $('#option1').on('change', function(){
                if ( $('#option1').val() != '모자'){
                    $('.size-select').show();
                } else {
                    $('.size-select').hide();
                }
            })

            let products = [
                { id : 0, price : 70000, title : 'Blossom Dress' },
                { id : 1, price : 50000, title : 'Springfield Shirt' },
                { id : 2, price : 60000, title : 'Black Monastery' }
              ]

            let products_copy = [...products];


            for (let i = 0; i < products.length; i++){
                $(`.title`).eq(i).html(products[i].title);
                $(`.price`).eq(i).html('가격: ' + products[i].price );
            }
            
            function sortButton(){
                for (let i = 0; i < products.length; i++){
                    $(`.title`).eq(i).html(products[i].title);
                    $(`.price`).eq(i).html('가격: ' + products[i].price );
                }
            }

            function descendingByPrice(){
                products.sort(function(prev,next){
                return next.price - prev.price
                });
                sortButton();
            }

            function ascendingByPrice(){
                products.sort(function(prev,next){
                return prev.price - next.price
                });
                sortButton();
            }

            function descendingByLetter(){
                products.sort(function(prev,next){
                    return prev.title > next.title ? 1 : -1;
            });
                sortButton();
            }

            function ascendingByLetter(){
                products.sort(function(prev,next){
                    return prev.title > next.title ? -1 : 1;
            });
                sortButton();
            }

            $('#sort-option').on('change',function(){
                let sortValue = $('#sort-option').val()
                if( sortValue == '가격내림차순' ){
                    descendingByPrice();
                }
                else if( sortValue == '가격오름차순' ){
                    ascendingByPrice();
                }
                else if( sortValue == 'A-Z' ){
                    descendingByLetter();
                }
                else if( sortValue == 'Z-A' ){
                    ascendingByLetter();
                }else{
                    $('.card-group').html('');
                    let newProduct = products.filter(function(a){
                        return a.price <= 60000
                    })

                    products = newProduct

                    newProduct.forEach(function(a){
                        let template = 
                        `<div class="card">
                        <img src="https://via.placeholder.com/200">
                        <div class="card-body">
                          <h5 class='title'>${a.title}</h5>
                          <p class='price'>가격 : ${a.price}</p>
                          <button class="btn btn-danger">주문하기</button>
                        </div>
                      </div>`
                        $('.card-group').append(template);
                    })
                }
            })

            $('#ajax').on('click',function(){
                $.ajax({
                    url: 'https://codingapple1.github.io/data.json',
                    type: 'GET'
                }).fail(function( jqXHR, textStatus, errorThrown ){
                    console.log(errorThrown);
                    alert(errorThrown);
                }).always(function(data){
                    data['title'] = 'Kona';
                    data['id'] = 3;
                    delete data.model;
                    delete data.brand;

                    products.push(data);
                
                let template = 
                        `<div class="card added-item">
                        <img src="https://via.placeholder.com/200">
                        <div class="card-body">
                          <h5 class='title'>${data.title}</h5>
                          <p class='price'>가격 : ${data.price}</p>
                          <button class="btn btn-danger">주문하기</button>
                        </div>
                      </div>`
                    $('.card-group').append(template);

                    $('#ajax').hide();


            })
        })

        $('#list-reset').on('click',function(){
            $('#ajax').show();
            $('.added-item').remove();

            products.sort(function(prev,next){
                return prev.id - next.id
                });
                products.pop()
                sortButton();

        })