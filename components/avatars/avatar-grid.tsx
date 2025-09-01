"use client"

import { avatars } from "@/lib/avatars"
import { AvatarCard } from "./avatar-card"

export function AvatarGrid({ limit }: { limit?: number }) {
  const items = limit ? avatars.slice(0, limit) : avatars
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((a) => (
        <AvatarCard key={a.id} avatar={a} />
      ))}
    </div>
  )
}
