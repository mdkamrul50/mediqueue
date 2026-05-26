import { createAuthClient } from 'better-auth/react';
export const authClient = createAuthClient({
  baseURL: 'https://mediqueue-two.vercel.app',
});

export const { signIn, signUp, useSession } = authClient;
