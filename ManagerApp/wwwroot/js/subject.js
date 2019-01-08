$('#create-subject-form').validate({
    'rules': {
        'subjectname': {
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
            'required': 'Please input subject name.',
            'minlength': 'Subject name is at least {0} character(s) long.',
            'maxlength': 'Subject name is at best {0} characters long.'
        },
        'description': {
            'required': 'Please input discription.',
            'minlength': 'Description is at least {0} character(s) long.',
            'maxlength': 'Description is at best {0} characters long.'
        },
    },
});
