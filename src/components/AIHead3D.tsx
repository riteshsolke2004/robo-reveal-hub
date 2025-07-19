import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function FloatingHead() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      
      // Mouse interaction
      const mouse = state.mouse
      meshRef.current.rotation.x = mouse.y * 0.1
      meshRef.current.rotation.z = mouse.x * 0.1
    }
  })

  return (
    <mesh
      ref={meshRef}
      scale={hovered ? 1.1 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#00d4ff"
        roughness={0.1}
        metalness={0.8}
        emissive="#0066cc"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

function NeuralParticles() {
  const points = useRef<THREE.Points>(null)
  
  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
      
      <FloatingHead />
      <NeuralParticles />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

function Fallback() {
  return (
    <div className="w-full h-[500px] flex items-center justify-center bg-gradient-card backdrop-blur-sm border border-border/50 rounded-2xl">
      <div className="text-center">
        <div className="w-24 h-24 bg-gradient-glow rounded-full flex items-center justify-center text-4xl mx-auto mb-4 animate-glow-pulse">
          🤖
        </div>
        <p className="text-muted-foreground">AI Brain Loading...</p>
      </div>
    </div>
  )
}

export default function AIHead3D() {
  return (
    <div className="w-full h-[500px] relative">
      <Suspense fallback={<Fallback />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          className="w-full h-full"
          onError={(error) => {
            console.warn('Canvas error:', error)
          }}
        >
          <Scene />
        </Canvas>
      </Suspense>
      
      {/* Holographic overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 hologram-effect pointer-events-none opacity-20" />
    </div>
  )
}