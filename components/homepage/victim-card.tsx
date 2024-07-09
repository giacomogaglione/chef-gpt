"use client"

import { useState } from "react"
import Image from "next/image"

type VictimCardProps = {
  heading: string
  description: string
  image: string
  video: string
  reason: string
  time: string
  money_got: string
}
export default function VictimCard({
  heading,
  description,
  image,
  video,
  reason,
  time,
  money_got,
}: VictimCardProps) {
  const [openVideo, setOpenVideo] = useState(true)
  return (
    <article className="mx-auto flex max-w-96 flex-col gap-6 rounded-lg border p-6 shadow-sm">
      <h6 className="font-bold">{heading}</h6>
      <p>{description}</p>
      <div className="relative">
        <iframe
          width="297"
          height="371"
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        {openVideo && (
          <Image
            src={image}
            alt="Video Thumbnail"
            width="297"
            height="371"
            className="absolute top-0"
            onClick={() => setOpenVideo(false)}
          />
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-md bg-gray-100 px-1 py-0.5 font-bold text-black shadow-md">
          {reason}
        </div>
        <div className="flex items-center rounded-md bg-gray-900 px-1 py-0.5 font-bold text-white shadow-md">
          🕓 {time}
        </div>
        <div className="flex items-center rounded-md bg-green-900 px-1 py-0.5 font-bold text-white shadow-md">
          {money_got}
        </div>
      </div>
    </article>
  )
}
