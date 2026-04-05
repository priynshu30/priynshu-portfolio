import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';

const Particles = ({ count = 6000, activeSection }) => {
  const pointsRef = useRef();
  const [warpAmount, setWarpAmount] = useState(0);

  useEffect(() => {
    if (activeSection) {
      // Trigger Warp Pulse
      gsap.to({ val: 0 }, {
        val: 1,
        duration: 0.5,
        ease: "power4.in",
        onUpdate: function() { setWarpAmount(this.targets()[0].val); },
        onComplete: () => {
          gsap.to({ val: 1 }, {
            val: 0,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: function() { setWarpAmount(this.targets()[0].val); }
          });
        }
      });
    }
  }, [activeSection]);

  const targets = {
    about: [0, 0, 0],
    skills: [8, 5, -5],
    projects: [-8, 2, -3],
    experience: [5, -5, -4],
    contact: [-5, -6, -2]
  };

  const { positions, distances, step } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const dist = new Float32Array(count);
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 60;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 60;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 60;
        dist[i] = Math.random() * 6 + 2;
        s[i] = Math.random() * 0.02 + 0.01;
    }
    return { positions: pos, distances: dist, step: s };
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const target = activeSection ? targets[activeSection] : [0, 0, 0];
    
    if (pointsRef.current) {
        const posAttr = pointsRef.current.geometry.attributes.position;
        
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            
            if (activeSection) {
                // Swarm around target + Warp Zoom
                const angle = time * step[i] * 10 + i;
                const radius = distances[i];
                
                const tx = target[0] + Math.cos(angle) * (radius * (1 - warpAmount * 0.5));
                const ty = target[1] + Math.sin(angle) * (radius * (1 - warpAmount * 0.5));
                const tz = target[2] + Math.sin(angle * 0.5) * (radius * (1 + warpAmount * 2));
                
                const lerpSpeed = warpAmount > 0.1 ? 0.05 : 0.02;
                posAttr.array[i3] += (tx - posAttr.array[i3]) * lerpSpeed;
                posAttr.array[i3 + 1] += (ty - posAttr.array[i3 + 1]) * lerpSpeed;
                posAttr.array[i3 + 2] += (tz - posAttr.array[i3 + 2]) * lerpSpeed;
            } else {
                // Drift in space
                posAttr.array[i3] += Math.sin(time * step[i]) * 0.01;
                posAttr.array[i3 + 1] += Math.cos(time * step[i]) * 0.01;
                posAttr.array[i3 + 2] += Math.cos(time * step[i] * 0.5) * 0.015;
            }
        }
        posAttr.needsUpdate = true;
        pointsRef.current.rotation.y += 0.0005 + (warpAmount * 0.01);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#3b82f6"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default Particles;
