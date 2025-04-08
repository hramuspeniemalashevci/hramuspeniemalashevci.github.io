// Back4App server - HramUspenieMultipage

export const info = {
    host: 'https://parseapi.back4app.com',
    headers: {
        'X-Parse-Application-Id': 'qfnjFeXrdVN5ZBKiCTorInh3D4YQki5zxqZWCCsd',
        'X-Parse-REST-API-Key': 'vgkdkHkymgE5vM8otldRwBtPkxPkE1WWVRbNykxK',
        'Content-Type': 'application/json'
    },
    className: 'PublicData',
    objectId: 'Nxw9VPfjS6',
};

const usersInfo = {
    signUp: {
        headers: {
            "X-Parse-Revocable-Session": "1"
        },
        body: 'username+password+email',
        response: ['objectId', 'sessionToken', 'r:']
    },

    logIn: {
        headers: {
            "X-Parse-Revocable-Session": "1"
        },
        body: 'username+password',
        response: ['objectId', 'sessionToken', 'r:']
    },

    passwordResetrequest: {
        headers: {},
        body: 'email',
        response: ['objectId', 'sessionToken', 'r:']
    },

    update: {
        headers: {
            "X-Parse-Session-Token": ''
        },
        body: 'newDataObject',
        response: ['sessionToken']
    },

    logout: {
        headers: {
            "X-Parse-Session-Token": ''
        },
        body: '',
        response: ['emptyObject']
    }

}

export const endpoints = {
    crud: `${info.host}/classes/${info.className}/${info.objectId}`, // GET, PUT
    users: {
        signUp: `${info.host}/users`, // POST
        logIn: `${info.host}/login`, // POST
        passwordResetRequest: `${info.host}/requestPasswordReset`, // POST
        update: `${info.host}/users/MyUserObjectId`, // PUT
        logout: `${info.host}/logout`, // POST
    }
};


const back4appBodyObjectSample = {
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
