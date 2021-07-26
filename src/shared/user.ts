class User {
    private id: number;
    private firstName: string;
    private lastName: string;
    private email: string;
    private gender: string;

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        gender: string
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
    }
}

export default User;
