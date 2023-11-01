export class Post {
    id: number;
    title: string;
    content: string;

    constructor(init?: Partial<Post>) {
        Object.assign(this, init);
    }

    public static Make(obj: any) {
        return new Post({
            id: obj.id,
            title: obj.title,
            content: obj.content,
        });
    }
}
