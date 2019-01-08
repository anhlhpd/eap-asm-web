 $('#create-class-form').validate({
    'rules': {
        'classname': {
            'required': true,
            'minlength': 1,
            'maxlength': 50
        },
        'description': {
            'required': true,
            'minlength': 1,
            'maxlength': 100
        },
    },
    'messages': {
        'subjectname': {
            'required': 'Please input class name.',
            'minlength': 'Class name is at least {0} character(s) long.',
            'maxlength': 'Class name is at best {0} characters long.'
        },
    'description': {
            'required': 'Please input description.',
            'minlength': 'Description is at least {0} character(s) long.',
            'maxlength': 'Description is at best {0} characters long.'
        },
    },   
});
