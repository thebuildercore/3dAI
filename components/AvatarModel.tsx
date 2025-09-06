// "use client"
// import { useGLTF } from "@react-three/drei"

// export function AvatarModel() {
//   const { scene } = useGLTF("/models/Suzanne.glb")
//   return <primitive object={scene} scale={2} position={[0, -0.5, 0]} />
// }
"use client"

import { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function AvatarModel() {
  const { scene } = useGLTF("/models/Suzanne.glb")
  const ref = useRef<THREE.Object3D>(null!)

  // Store mouse position
  const mouse = useRef({ x: 0, y: 0 })

  // Capture cursor movement (inside useEffect to avoid duplicate listeners)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useFrame(() => {
    if (ref.current) {
      const targetX = mouse.current.y * 0.5
      const targetY = mouse.current.x * 0.5

      // Smoothly follow cursor
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, targetX, 0.05)
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetY, 0.05)
    }
  })

  return <primitive ref={ref} object={scene} scale={1.5} />
}
