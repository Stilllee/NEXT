import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
// authConfig 객체를 사용하여 NextAuth.js를 초기화하고 auth 속성을 내보내고 있다. 또한 미들웨어의 일치자 옵션을 사용하여 특정 경로에서 실행되도록 지정하고 있다.
// 이 작업에 미들웨어를 사용하면 미들웨어가 인증을 확인할 때까지 보호된 경로가 렌더링을 시작하지 않으므로 애플리케이션의 보안과 성능이 모두 향상된다는 이점이 있다.
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};