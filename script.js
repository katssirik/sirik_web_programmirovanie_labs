console.log("Всем привет!!! :) Э");
            console.error("Сообщение об ошибке");
            console.warn("Сообщение-предупреждение");

            function notReadyAlert() {
                alert('Sorry, not ready yet!\nИзвините, еще не готово!');
                return false;
            }

            function search() {
                let name = document.getElementById('search').value;
                let productNumber = null;
                if (name=='Гель для душа персиковый') {
                    productNumber =0; 
                } else if (name =='Шампунь') {
                    productNumber =1
                }else if (name =='Бальзам для волос') {
                    productNumber =2
                } else if (name =='Гель для душа с ароматом кокоса') {
                    productNumber =3
                } else {
                    alert('Товар не найден')
                }
                let cards = document.getElementsByClassName('card');
                let card = cards[productNumber];
                card.style.border = 'lpx dashed red';
                card.style.backgroundColor = 'yellow';

                setTimeout(function(){
                    card.style.border = 'none';
                    card.style.backgroundColor = '';
                }, 2000);
            }
            function loader() {
                let searchbox = document.getElementById('search');
                searchbox.addEventListener('keydown', function(key) {
                    if (key.key == 'Enter')
                        search();
                });
            }