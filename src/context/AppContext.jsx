//React Context es un método que permite transferir props de un componente padre a sus hijos, a través del almacenamiento de datos en un store, sin realizarlo de manera manual, por nivel. En una explicación más general, cualquier componente hijo puede acceder a estos valores mientras esté situado debajo del componente padre.

import React from 'react'

export let usersArray = [
    {
        id: 1,
        username: 'Kazpiter',
        password: '123456',
        name: 'Peio',
        lastname: 'Murguia',
        birth: '1988/03/20'
    },
    {
        id: 2,
        username: 'Kiookai',
        password: '123456',
        name: 'Jota',
        lastname: 'Iglesias',
        birth: '1993/02/13'
    },
    {
        id: 3,
        username: 'Colmund',
        password: '123456',
        name: 'Rafa',
        lastname: 'Fernández',
        birth: '1991/01/26'
    }
]

//todo esto importar a App.jsx
const AppContext = React.createContext(undefined)

export default AppContext