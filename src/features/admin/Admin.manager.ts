import { AdminService } from './Admin.service';
import { User } from './model/User';

export const AdminManager = {
    ListUsers: async (): Promise<Array<User> | null> => {
        const response = await AdminService.ListUsers();

        if (response.error) {
            return null;
        }

        return response.body.map((user: any) => User.Make(user));
    },
} as const;
