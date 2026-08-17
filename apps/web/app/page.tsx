"use client"
import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { useState } from "react"

export default function Page() {
  const [userName, setUserName] = useState("")

  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)

  const handleNameChange = async () => {
    if (!userName.trim()) return
    await addUser({ name: userName.trim() })
    setUserName("")
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <p>app/web</p>
      <div className="flex flex-row gap-2">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="bg-gray-400"
        />
        <button className="bg-green-500 p-2" onClick={handleNameChange}>
          Add
        </button>
      </div>
      <div className="mx-auto w-full max-w-sm">
        {" "}
        {users?.map((user) => (
          <p key={user._id}>{user.name}</p>
        ))}
      </div>
    </div>
  )
}
