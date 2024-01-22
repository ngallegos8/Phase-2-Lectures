import { useLoaderData } from "react-router-dom"

function Profile(){

    const user = useLoaderData()

    return (
        <div>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>{user.age}</p>
            <p>{user.email}</p>
        </div>
    )

}

export const userProfile = async ({params}) => {
    const {id} = params
    console.log(id)

    const response = await fetch(`http://localhost:4000/users/${id}`)
    const user = await response.json()
    console.log(user)
    return user
    
    // OR...
    // return response.json()
}




export default Profile;
