import NextAuth, { NextAuthOptions } from "next-auth"
import GitHubProvider, { type GithubProfile } from "next-auth/providers/github";

const authOptions: NextAuthOptions = {
    providers: [
        GitHubProvider<GithubProfile>({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
      }),
    ],
  
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }