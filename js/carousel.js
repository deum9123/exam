let carousel = function()
{
    let carousel = 
    {
        current_slide: 0,
        slides: 
        [
            {
                background_image: 'url(img/banners/banner_1.jpg)',
                text: 'Buy more <br> or die',
                text_color: '#333',
                text_left: '93px',
                text_top: '300px',
            },
            {
                background_image: 'url(img/banners/banner_2.jpg)',
                text: 'Choose your <br> destiny',
                text_color: '#fff',
                text_left: '900px',
                text_top: '170px',
            },
            {
                background_image: 'url(img/banners/banner_3.jpg)',
                text: 'Nice prices <br> are not here',
                text_color: '#333',
                text_left: '460px',
                text_top: '50px',
            },
        ],
        set_slide(e)
        {
            let variant = $(e.target).attr('arrow_click');
            if(variant == 'left') this.turn_slide.call(this, -1)
            else if(variant == 'right') this.turn_slide.call(this, 1);
        },
        turn_slide(num)
        {
            this.current_slide += num;
            if(this.current_slide < 0) this.current_slide = 2;
            if(this.current_slide > 2) this.current_slide = 0;
            this.set_attributes_to_slider(this.current_slide);
        },
        set_attributes_to_slider(num)
        {
            let slide = this.slides[num];
            $('#content_carousel_wrapper').css('backgroundImage', slide.background_image);
            $('#content_carousel_text').css(
                {
                    backgroundImage: slide.text,
                    color: slide.text_color,
                    left: slide.text_left,
                    top: slide.text_top,
                })
            $('#content_carousel_text').html(slide.text);
        }
    }

    return carousel;
}()