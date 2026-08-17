"use client"
import { useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"

export default function Page() {
  const users = useQuery(api.users.getMany)
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <p>app/widget</p>
      <div className="mx-auto w-full max-w-sm">
        {users?.map((user) => (
          <p key={user._id}>{user.name}</p>
        ))}
      </div>
    </div>
  )
}
