$('#create-account-form').validate({
    'rules': {
        'firstname': {
            'required': true,
            'minlength': 1,
            'maxlength': 30
        },
        'lastname': {
            'required': true,
            'minlength': 1,
            'maxlength': 50
        },
        'gender': {
            'required': true
        },
        'role': {
            'required': true
        },
        // 'birthday': {
        //     'required': true
        // },
        // validate trực tiếp ở HTML
        'phone': {
            'required': true,
            'minlength': 10,
            'maxlength': 50
        }
    },
    'messages': {
        'firstname': {
            'required': 'Please input first name.',
            'minlength': 'First name is at least {0} character(s) long.',
            'maxlength': 'First name is at best {0} characters long.'
        },
        'lastname': {
            'required': 'Please input last name.',
            'minlength': 'Last name is at least {0} character(s) long.',
            'maxlength': 'Last name is at best {0} characters long.'
        },
        'gender': {
            'required': 'Please input gender.'
        },
        'role': {
            'required': 'Please input role.'
        },
        'phone': {
            'required': 'Please input phone number.',
            'minlength': 'Phone number is at least {0} character(s) long.',
            'maxlength': 'Phone number is at best {0} characters long.'
        }
    },
    'submitHandler': function (form) {
        var _firstname = $('[name=firstname]').val();
        var _lastname = $('[name=lastname]').val();
        var _birthday = $('[name=birthday]').val();
        var _gender = $('[name=gender]').val();
        var _phone = $('[name=phone]').val();
        var _roleName = $('[name=role]').val();
        var dataToSend = {
            firstname: _firstname,
            lastname: _lastname,
            birthday: _birthday,
            gender: _gender,
            phone: _phone
        };
        $.ajax({
            method: 'POST',
            url: 'https://eap-asm.azurewebsites.net/api/generalInformations/' + _roleName,
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify(dataToSend),
            success: function (data, textStatus, jqXHR) {
                alert('Account created successfully!');
            },
            error: function (jqXHR, exception) {
                alert('An error happened. An account wasn`t created');
            }
        });
    }
});