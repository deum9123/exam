let menu = function()
{
    let menu = 
    {
        open_menu(e)
        {
            let th = $(e.target);
            if(th.hasClass('active'))
            {
                $('#menu .active').removeClass('active');
                $('#submenu').addClass('d-none');
            } else 
            {
                $('#menu .active').removeClass('active');
                th.addClass('active');
                $('#submenu').removeClass('d-none');
            }
        }
    }

    return menu;
}()