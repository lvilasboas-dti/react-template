import { HttpStatus } from '../../common/Http';
import { AdminService } from './Admin.service';
import { User } from './model/User';

interface CreateUserResult {
    user?: User;
    error?: string;
}

export const AdminManager = {
    ListUsers: async (): Promise<Array<User> | null> => {
        const response = await AdminService.ListUsers();

        if (response.error) {
            return null;
        }

        return response.body.map((user: any) => User.Make(user));
    },

    CreateUser: async (email: string, password: string): Promise<CreateUserResult> => {
        const response = await AdminService.CreateUser(email, password);

        if (response.error || response.status !== HttpStatus.Created) {
            return { error: response.body };
        }

        const user = User.Make(response.body.user);
        return { user };
    },
} as const;
