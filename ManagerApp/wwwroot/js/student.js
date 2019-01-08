$('#create-student-form').validate({
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
        'phone': {
            'required': true,
            'minlength': 10,
            'maxlength': 50
        },
        'birthday': {
            'required': true
        },
        'gender': {
            'required': true
        },
        'email': {
            'required': true,
            'minlength': 1,
            'maxlength': 50
        },           
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
        'phone': {
            'required': 'Please input phone number.',
            'minlength': 'Phone number is at least {0} character(s) long.',
            'maxlength': 'Phone number is at best {0} characters long.'
        },
        'brithday': {
            'required': 'Please input brithday.'
        },
        'gender': {
            'required': 'Please input gender.'
        },
        'role': {
            'required': 'Please input role.'
        },
        'phone': {
            'required': 'Please input phone email.',
            'minlength': 'Email is at least {0} character(s) long.',
            'maxlength': 'Email is at best {0} characters long.'
        }
    },    
});