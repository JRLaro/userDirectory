

function mapUsers(usersList) {
    return usersList.map((user) => {
        return {
            image: user.picture.thumbnail,
            fName: user.name.first,
            lName: user.name.last,
            email: user.email,
            phone: user.phone
        }
    })
}





export { mapUsers };