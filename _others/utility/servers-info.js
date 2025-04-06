// Back4App server - HramUspenieAuthabc
const back4App = {
    host: 'https://parseapi.back4app.com',
    headers: {
        'X-Parse-Application-Id': 'wlZezVWuR0xG3VDM2SPqvEuSPE66bKspj5iKigGL',
        'X-Parse-REST-API-Key': 'a0cX24dr7zCbVXCMWWmC8OQrDtKXvBsQ4AOd4bNA',
        'Content-Type': 'application/json'
    },

    crud: {
        read: {
            endpoint: '/classes/MyCustomClassName',
            method: 'GET',
        },

        update: {
            endpoint: '/classes/MyCustomClassName/MyCurrentObjectId',
            method: 'PUT',
        }

    },

    users: {
        signUp: {
            endpoint: '/users',
            method: 'POST',
            headers: {
                "X-Parse-Revocable-Session": "1"
            },
            body: 'username+password+email',
            response: ['objectId', 'sessionToken', 'r:']
        },

        logIn: {
            endpoint: '/login',
            method: 'POST',
            headers: {
                "X-Parse-Revocable-Session": "1"
            },
            body: 'username+password',
            response: ['objectId', 'sessionToken', 'r:']
        },
        passwordResetrequest: {
            endpoint: '/requestPasswordReset',
            method: 'POST',
            headers: {},
            body: 'email',
            response: ['objectId', 'sessionToken', 'r:']
        },
        update: {
            endpoint: 'users/MyUserObjectId',
            method: 'PUT',
            headers: {
                "X-Parse-Session-Token": ''
            },
            body: 'newDataObject',
            response: ['sessionToken']
        },
        logout: {
            endpoint: 'logout',
            method: 'POST',
            headers: {
                "X-Parse-Session-Token": ''
            },
            body: '',
            response: ['emptyObject']
        }

    }
};

const back4appBodyObject = {
    "ScheduleArr": [
        {
            "date": "03.01.2022",
            "day": "понеделник",
            "description": "-Празнуваме големия християнски празник Свето Преображение Господне!!! Честит празник! След празничната Св.Литургия ще се отслужи Благодарствена молитва и водосвет. Заповядайте!/n- Св.Литургия - Начало: 09:00\n- Вечерня - Начало: 17:00"
        },
        {
            "date": "04.01.2022",
            "day": "вторник",
            "description": "- Утреня - Начало: 08:00\n- Св.Литургия - Начало: 09:00\n- Вечерня - Начало: 17:00"
        },
        {
            "date": "05.01.2022",
            "day": "сряда",
            "description": "- Утреня - Начало: 08:00\n- Св.Литургия - Начало: 09:00\n- Вечерня - Начало: 17:00"
        },
        {
            "date": "06.01.2022",
            "day": "четвъртък",
            "description": "- Утреня - Начало: 08:00\n- Св.Литургия - Начало: 09:00\n- Вечерня - Начало: 17:00"
        },
        {
            "date": "07.01.2022",
            "day": "петък",
            "description": "- Утреня - Начало: 08:00\n- Св.Литургия - Начало: 09:00\n- Вечерня - Начало: 17:00"
        },
        {
            "date": "08.01.2022",
            "day": "събота",
            "description": "- Утреня - Начало: 08:00\n- Св.Литургия - Начало: 09:00\n- Вечерня - Начало: 17:00"
        },
        {
            "date": "09.01.2022",
            "day": "неделя",
            "description": "- Утреня - Начало: 08:00\n- Св.Литургия - Начало: 09:00\n- Вечерня - Начало: 17:00"
        }
    ]
};
