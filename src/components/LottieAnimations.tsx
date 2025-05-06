"use client"
import React, { useEffect, useRef } from "react"

const LottieAnimation = ({ animationPath }: { animationPath: string }) => {
  const container = useRef(null)
  const [lottie, setLottie] = React.useState<any>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("lottie-web").then((module) => {
        setLottie(module.default)
      })
    }
  }, [])

  useEffect(() => {
    if (container.current && lottie) {
      const anim = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: animationPath,
      })

      return () => anim.destroy()
    }
  }, [animationPath, lottie])

  return <div ref={container}></div>
}

export default LottieAnimation