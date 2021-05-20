let validator = function()
{
    let validator = 
    {
        validate(e)
        {
            e.preventDefault();
            let inputs = Array.from($('input', e.target));
            let res = '';
            inputs.forEach(item =>
                {
                    if(!this.validate_input.call(this, $(item))) res = 'invalidate';
                });
            this.result.call(this, res);
        },
        validate_input(th)
        {
            let res = true;
            let type = th.attr('type');
            switch(type)
            {
                case 'phone':
                    res = this.phone.call(this, th);
                break
                case 'email':
                    res = this.email.call(this, th);
                break
            }
            return res;
        },
        phone(th)
        {
            let txt = th.val().replace(/\s/g, "");
            let res = true;
            if(txt.length != 12) res = false;
            else if(/[a-z, A-Z]/.test(txt)) res = false;
            this.validate_input_result.call(this, th, res);
            return res;
        },
        email(th)
        {
            let txt = th.val().replace(/\s/g, "");
            let res = true;
            if(txt.length < 5) res = false;
            else if(!/[., @]/.test(txt)) res = false;
            this.validate_input_result.call(this, th, res);
            return res;
        },
        validate_input_result(th, res)
        {
            if(!res)
            {
                this.validate_input_result_error(th)
                
            } else 
            {
                this.valdate_input_ok(th);                
            }
        },
        valdate_input_ok(th)
        {
            th.removeClass('invalidated_input');
        },
        validate_input_result_error(th)
        {
            th.addClass('invalidated_input');
        },
        result(res)
        {
            if(res == 'invalidate')
            {
                
            } else 
            {
                $('[form]').val('');
                modal.hide();
            }
        }
    }

    return validator;
}()