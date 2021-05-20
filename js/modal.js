let modal = function()
{
    let modal = 
    {
        hide()
        {
            $('#modal').addClass("d-none");
        },
        show()
        {
            $('#modal').removeClass("d-none");
        }
    }

    return modal;
}()