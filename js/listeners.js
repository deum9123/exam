$('[arrow_click]').on("click", carousel.set_slide.bind(carousel));
$('#close_modal').on('click', modal.hide.bind(modal));
$(document).on("click", '[good_id]', modal.show.bind(modal));
$('#modal_form').on('submit', validator.validate.bind(validator));
$('[menu_item]').on("click", menu.open_menu.bind(menu))