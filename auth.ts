import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// Credentials은 Google, Github과 같은 로그인 옵션을 나열하는 배열이다.
// 이를 통해 사용자는 사용자 이름과 비밀번호로 로그인할 수 있다.
// 일반적으로는 OAuth 또는 email providers와 같은 대체 providers를 사용하는 것이 좋다.
import Credentials from 'next-auth/providers/credentials';
 
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';

// credentials의 유효성 검사 후 db에서 사용자를 쿼리하는 getUser 함수를 만든다.
async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('사용자를 가져오지 못했습니다:', error);
    throw new Error('사용자를 가져오지 못했습니다.');
  }
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    // authorize 함수를 사용해서 인증 로직을 처리할 수 있다.
    // zod로 db에 사용자가 존재하는지 확인하기 전에 이메일, 비밀번호의 유효성을 검사할 수 있다.
    async authorize(credentials) {
      const parsedCredentials = z
        .object({ email: z.string().email(), password: z.string().min(6) })
        .safeParse(credentials);
      
      if (parsedCredentials.success) {
        const { email, password } = parsedCredentials.data;
        const user = await getUser(email);
        if (!user) return null;
        // bcrypt.compare를 호출해 비밀번호가 일치하는지 확인한다.
        const passwordsMatch = await bcrypt.compare(password, user.password);
        
        if (passwordsMatch) return user;
      }
      
      console.log('잘못된 자격 증명')
      return null;
      },
    }),
  ],
});