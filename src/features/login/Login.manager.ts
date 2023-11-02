import { LoginService } from './Login.service';

export const LoginManager = {
    Login: async (email: string, password: string): Promise<string | null> => {
        const response = await LoginService.Login(email, password);

        if (response.error || !response.body.accessToken) {
            return null;
        }

        return response.body.accessToken;
    },
};
