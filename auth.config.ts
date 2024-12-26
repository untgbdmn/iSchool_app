import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import { SignInSchema } from "@/lib/zod"
import { compareSync } from "bcrypt-ts"
import { prisma } from "@/lib/prisma"

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Google,
    Github,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedFields = SignInSchema.safeParse(credentials)

        if (!validatedFields.success) {
          return null
        }

        const { email, password } = validatedFields.data

        const user = await prisma.user.findUnique({
          where: { email },
        })

        if (!user || !user.password) {
          throw new Error("No user found")
        }

        const passwordMatch = compareSync(password, user.password)

        if (!passwordMatch) return null

        return user
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    session({ session, token }) {
      session.user.id = token.sub
      session.user.role = token.role
      return session
    }
  }
} satisfies NextAuthConfig

