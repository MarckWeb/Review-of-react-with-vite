import React, { useContext, useState } from 'react'
import AppContext, {usersArray} from '../../context/AppContext';

const EditUser = () => {
    const {user, setUser} = useContext(AppContext)
    //NOta-.cuando un input no deja escribir es pro el name que debe ser igual a la propiedad del objeto(solo al hacer objeto)
    const [dataUpdate, setDataUpdate] = useState({
        username: user.username,
        name: user.name,
        lastname: user.lastname,
        birth: user.birth,
    });


    const formUpdate = (e) => {
        e.preventDafault()
        console.log('enviado')
    }

    const valoresInput = (e) => {
        console.log(e.target)
        setDataUpdate(
            {
                ...dataUpdate,
                [e.target.name]: e.target.value
            }
        )

    }

    return (
        <div>
            <form action="" onSubmit={formUpdate}>
                <div>
                    <label htmlFor="username">Nombre de Usuario</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={dataUpdate.username}
                        onChange={valoresInput} />
                </div>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={dataUpdate.name}
                        onChange={valoresInput} />
                </div>
                <div>
                    <label htmlFor="lastname">Apellido</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={dataUpdate.lastname}
                        onChange={valoresInput} />
                </div>
                <div>
                    <label htmlFor="birth">Nacimiento</label>
                    <input
                        type="text"
                        name="birth"
                        id="birth"
                        value={dataUpdate.birth}
                        onChange={valoresInput} />
                </div>
                <div>
                    <input type="submit" value="Actualizar" />
                </div>
            </form>
        </div>


    )
}

export default EditUser