import React, { useRef, useMemo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Text, Ring, Html } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const PortfolioItem = ({ position, title, color, onClick, activeSection, sectionKey }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const isActive = activeSection === sectionKey;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.cos(time / 4) / 8;
      meshRef.current.rotation.y = Math.sin(time / 4) / 8;
      meshRef.current.position.y = Math.sin(time * 0.5) * (isActive ? 0.4 : 0.2);
      
      const targetScale = hovered ? 1.2 : (isActive ? 1.4 : 1);
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={isActive ? 6 : 3} rotationIntensity={0.8} floatIntensity={0.8}>
      <group position={position}>
        <mesh 
          ref={meshRef}
          onClick={(e) => {
            e.stopPropagation();
            onClick(sectionKey);
          }}
          onPointerOver={() => {
              setHovered(true);
              document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
              setHovered(false);
              document.body.style.cursor = 'auto';
          }}
        >
          <boxGeometry args={[2, 2, 0.4]} />
          <MeshTransmissionMaterial 
              backside
              samples={16}
              resolution={512}
              transmission={1}
              roughness={0.1}
              thickness={0.5}
              ior={1.2}
              chromaticAberration={0.06}
              anisotropy={0.1}
              distortion={0.3}
              distortionScale={0.3}
              temporalDistortion={0.5}
              clearcoat={1}
              attenuationDistance={0.5}
              attenuationColor={color}
              color={hovered || isActive ? 'white' : color} 
          />
          <Text
            position={[0, 0, 0.25]}
            fontSize={0.25}
            color="white"
            font="https://fonts.gstatic.com/s/orbitron/v25/y97pyW9Cz_5ebF9S6X2t8Q.woff"
            anchorX="center"
            anchorY="middle"
          >
            {title}
          </Text>
        </mesh>
        
        {isActive && (
            <>
                <Ring args={[1.5, 1.6, 64]} position={[0, 0, -0.1]}>
                    <meshBasicMaterial color={color} transparent opacity={0.5} side={THREE.DoubleSide} />
                </Ring>
                <Ring args={[1.7, 1.75, 64]} position={[0, 0, -0.15]}>
                    <meshBasicMaterial color="white" transparent opacity={0.2} side={THREE.DoubleSide} />
                </Ring>
            </>
        )}
      </group>
    </Float>
  );
};

import EnvironmentGrid from './EnvironmentGrid';

const Debris = ({ count = 20 }) => {
  const meshRef = useRef();
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
        const pos = [
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 40
        ];
        const scale = Math.random() * 0.1 + 0.05;
        temp.push({ pos, scale, speed: Math.random() * 0.2 + 0.1 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
        meshRef.current.children.forEach((child, i) => {
            child.position.y += Math.sin(time * particles[i].speed) * 0.005;
            child.rotation.x += 0.01;
            child.rotation.y += 0.01;
        });
    }
  });

  return (
    <group ref={meshRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <tetrahedronGeometry args={[p.scale, 0]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} wireframe />
        </mesh>
      ))}
    </group>
  );
};

const IdentityPlate = ({ position }) => {
  const meshRef = useRef();
  const texture = useMemo(() => new THREE.TextureLoader().load('/profile_avatar.png'), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.1;
      meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <planeGeometry args={[1.5, 1.5]} />
        <meshBasicMaterial map={texture} transparent opacity={0.8} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[1.6, 1.6]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.2} />
      </mesh>
      {/* Decorative frame elements */}
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(1.6, 1.6)]} />
        <lineBasicMaterial color="#3b82f6" />
      </lineSegments>
    </group>
  );
};

const Scene = ({ activeSection, setActiveSection }) => {
  const { camera } = useThree();

  React.useEffect(() => {
    if (activeSection) {
      const targets = {
        about: { pos: [3, 0, 5], lookAt: [0, 0, 0], fov: 25 },
        skills: { pos: [8, 5, 5], lookAt: [8, 5, 0], fov: 30 },
        projects: { pos: [-8, 2, 5], lookAt: [-8, 2, 0], fov: 28 },
        experience: { pos: [5, -5, 5], lookAt: [5, -5, 0], fov: 32 },
        contact: { pos: [-5, -6, 5], lookAt: [-5, -6, 0], fov: 30 }
      };

      const target = targets[activeSection];
      if (target) {
        // Position Animate
        gsap.to(camera.position, {
          x: target.pos[0],
          y: target.pos[1],
          z: target.pos[2],
          duration: 2,
          ease: "expo.inOut"
        });
        
        // FOV Warp Animate
        gsap.to(camera, {
            fov: target.fov,
            duration: 1,
            ease: "power2.inOut",
            onUpdate: () => camera.updateProjectionMatrix(),
            onComplete: () => {
                gsap.to(camera, {
                    fov: 35,
                    duration: 1.5,
                    ease: "power2.out",
                    onUpdate: () => camera.updateProjectionMatrix()
                });
            }
        });
      }
    } else {
      gsap.to(camera.position, {
        x: 0,
        y: 0,
        z: 15,
        duration: 2,
        ease: "expo.inOut"
      });
      gsap.to(camera, {
          fov: 35,
          duration: 2,
          onUpdate: () => camera.updateProjectionMatrix()
      });
    }
  }, [activeSection, camera]);

  useFrame((state) => {
    if (!activeSection) {
      const x = (state.mouse.x * 2);
      const y = (state.mouse.y * 2);
      camera.position.x += (x - camera.position.x) * 0.05;
      camera.position.y += (y - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <EnvironmentGrid />
      <Debris count={30} />
      <IdentityPlate position={[-3, 0, 0]} />
      <PortfolioItem sectionKey="about" position={[0, 0, 0]} title="ABOUT" color="#3b82f6" activeSection={activeSection} onClick={setActiveSection} />
      <PortfolioItem sectionKey="skills" position={[8, 5, -5]} title="SKILLS" color="#8b5cf6" activeSection={activeSection} onClick={setActiveSection} />
      <PortfolioItem sectionKey="projects" position={[-8, 2, -3]} title="PROJECTS" color="#ec4899" activeSection={activeSection} onClick={setActiveSection} />
      <PortfolioItem sectionKey="experience" position={[5, -5, -4]} title="EXPERIENCE" color="#10b981" activeSection={activeSection} onClick={setActiveSection} />
      <PortfolioItem sectionKey="contact" position={[-5, -6, -2]} title="CONTACT" color="#f59e0b" activeSection={activeSection} onClick={setActiveSection} />
    </>
  );
};

export default Scene;
