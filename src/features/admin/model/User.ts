export class User {
    id: number;
    email: string;

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }

    public static Make(obj: Record<string, any>) {
        return new User({
            id: obj['id'],
            email: obj['email'],
        });
    }
}
