import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  // 페이지 옵션 추가
  // 사용자 정의 로그인, 로그아웃 및 오류 페이지의 경로를 지정할 수 있다.
  // 필수는 아니지만 signin: '/login'을 추가하면 사용자가 NextAuth.js 기본 페이지가 아닌 사용자 지정 로그인 페이지로 리디렉션된다.
  pages: {
    signIn: '/login',
  },
  // 미들웨어로 경로 보호하기
  // 사용자가 로그인하지 않으면 대시보드 페이지에 액세스할 수 없다.
  // 인증 콜백은 요청이 Next.js 미들웨어를 통해 페이지에 액세스할 수 있는 권한이 있는지 확인하는 데 사용된다. 요청이 완료되기 전에 호출되며, auth 및 request 속성을 가진 객체를 수신한다. auth 속성에는 사용자의 세션이 포함되고 request 속성에는 들어오는 요청이 포함된다.
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;