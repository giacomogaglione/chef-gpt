import Image from "next/image"

import VictimCard from "./victim-card"

export default function AdsSection() {
  const Victims = [
    {
      heading: "T-Boned on US1 By Ford F-150",
      description:
        "I was traveling southbound on US1 in my 2018 BMW 5-Series when a black F-150....",
      image: "/thumbnail.png",
      video: "https://www.youtube.com/embed/SuqU904ZHA4?si=MG3fIUJmtgzDUdCI",
      reason: "Accident",
      time: "4 min",
      money_got: "$12000",
    },
    {
      heading: "T-Boned on US1 By Ford F-150",
      description:
        "I was traveling southbound on US1 in my 2018 BMW 5-Series when a black F-150....",
      image: "/thumbnail.png",
      video: "https://www.youtube.com/embed/SuqU904ZHA4?si=MG3fIUJmtgzDUdCI",
      reason: "Slip And Fall",
      time: "3 min",
      money_got: "$1000",
    },
    {
      heading: "T-Boned on US1 By Ford F-150",
      description:
        "I was traveling southbound on US1 in my 2018 BMW 5-Series when a black F-150....",
      image: "/thumbnail.png",
      video: "https://www.youtube.com/embed/SuqU904ZHA4?si=MG3fIUJmtgzDUdCI",
      reason: "Work Injury",
      time: "4 min",
      money_got: "$1000",
    },
  ]
  return (
    <section className="my-9 py-4">
      <div className="mb-12 flex items-center justify-center">
        <div className="mx-auto max-w-screen-sm text-center">
          <Image
            src={"/heading.svg"}
            alt="Heading"
            width={300}
            height={100}
            className="mx-auto mb-4 size-auto"
          />
          <h4 className="text-2xl font-bold">
            WE&apos;VE DRIVEN OVER $12,129,129.93 IN additional payouts OUR
            CLIENTs
          </h4>
          <p>But don&apos;t hear it from us, hear it from them...</p>
        </div>
      </div>
      <div>
        <p className="mb-4 text-xl font-bold">Recent Accident Victims</p>
        <div className="grid gap-x-8 gap-y-4 lg:grid-cols-3">
          {Victims.map((victim, index) => (
            <VictimCard
              key={index}
              heading={victim.heading}
              description={victim.description}
              image={victim.image}
              time={victim.time}
              reason={victim.reason}
              video={victim.video}
              money_got={victim.money_got}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
