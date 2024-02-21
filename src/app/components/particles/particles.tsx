"use client"

import { useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles"
import { type Container } from "@tsparticles/engine"
import particlesConfig from "./particlesConfig"
import { RecursivePartial } from "@tsparticles/engine"
import IOptions from "@tsparticles/react"
import { loadPolygonPath } from "@tsparticles/path-polygon"
import { tsParticles } from "@tsparticles/engine"
import { loadTrailEffect } from "@tsparticles/effect-trail"
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask"
import { loadExternalRepulseInteraction } from "@tsparticles/interaction-external-repulse"

const BackgroundParticles = () => {
  const [init, setInit] = useState(false)
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }
  if (process.browser) {
    require("pathseg")
  }
  const options = useMemo(() => particlesConfig, [])
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // or hex trails
      // await loadPolygonPath(tsParticles)
      // await loadTrailEffect(tsParticles)
      await loadPolygonMaskPlugin(tsParticles)
      await loadExternalRepulseInteraction(tsParticles)
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options as RecursivePartial<typeof IOptions>}
        />
      )}
    </>
  )
}

export default BackgroundParticles
