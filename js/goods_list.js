let goods_list = function()
{
    let goods_list = 
    {
        item_list:
        [
          {
              id: '1',
              img: 'url(img/printed-chiffon-dress.jpg)',
              img_alt: 'url(img/printed-chiffon-dress_1.jpg)',
              category: 'good',
              name: 'printer',
              price: 10.5
          },
          {
            id: '2',
            img: 'url(img/printed-chiffon-dress_2.jpg)',
            img_alt: 'url(img/printed-chiffon-dress_11.jpg)',
            category: 'good',
            name: 'printer',
            price: 12
           },
           {
            id: '3',
            img: 'url(img/printed-chiffon-dress_3.jpg)',
            img_alt: 'url(img/printed-chiffon-dress_10.jpg)',
            category: 'good',
            name: 'printer',
            price: 110
           },
           {
            id: '4',
            img: 'url(img/printed-chiffon-dress_4.jpg)',
            img_alt: 'url(img/printed-chiffon-dress_9.jpg)',
            category: 'good',
            name: 'printer',
            price: 1.25
           },
           {
            id: '5',
            img: 'url(img/printed-chiffon-dress_5.jpg)',
            img_alt: 'url(img/printed-chiffon-dress_8.jpg)',
            category: 'good',
            name: 'printer',
            price: 30
           },
           {
            id: '6',
            img: 'url(img/printed-chiffon-dress_6.jpg)',
            img_alt: 'url(img/printed-chiffon-dress_7.jpg)',
            category: 'good',
            name: 'printer',
            price: 50
           },
           {
            id: '7',
            img: 'url(img/printed-chiffon-dress_7.jpg)',
            img_alt: 'url(img/printed-chiffon-dress_6.jpg)',
            category: 'good',
            name: 'printer',
            price: 71
           },
           {
            id: '8',
            img: 'url(img/printed-chiffon-dress_8.jpg)',
            img_alt: 'url(img/printed-chiffon-dress_5.jpg)',
            category: 'good',
            name: 'printer',
            price: 84.30
           },
           {
            id: '9',
            img: 'url(img/printed-chiffon-dress_9.jpg)',
            img_alt: 'url(img/printed-chiffon-dress_4.jpg)',
            category: 'good',
            name: 'printer',
            price: 11
           },
           {
            id: '10',
            img: 'url(img/printed-chiffon-dress_10.jpg)',
            img_alt: 'url(img/printed-chiffon-dress_3.jpg)',
            category: 'good',
            name: 'printer',
            price: 78
           },
           {
            id: '11',
            img: 'url(img/printed-chiffon-dress_11.jpg)',
            img_alt: 'url(img/printed-chiffon-dress_2.jpg)',
            category: 'good',
            name: 'printer',
            price: 989
           },
           {
            id: '12',
            img: 'url(img/printed-chiffon-dress_12.jpg)',
            img_alt: 'url(img/printed-chiffon-dress_1.jpg)',
            category: 'good',
            name: 'printer',
            price: 43
           },
        ],
        render_list()
        {
            let goods_list_html = this.create_goods_list_html(this.item_list);
            $('#goods_wrapper').html(goods_list_html)
        },
        create_goods_list_html(list)
        {
            let res = list.map(item => 
            {
                return `
                <div class="content_goods_item" good_id = '${item.id}'>
                    <div class = 'content_item_img' style = 'background-image: ${item.img}'>
                       <div class = 'content_item_ater_img' style = 'background-image: ${item.img_alt}'></div>
                    </div>
                    <div class = 'content_item_desc'>
                    <div class = 'content_item_desc_contain'>
                        <div class = 'content_goods_item_category'>${item.category}</div>
                        <div class = 'content_goods_item_name'>${item.name}</div>
                    </div>
                    <div class = 'content_goods_item_price'>$${item.price}</div>
                    </div>
                </div>
            `
            }).join("");

            return res;
        }
    }
    
    return goods_list;
}()