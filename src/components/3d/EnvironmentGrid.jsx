import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Grid } from '@react-three/drei';
import * as THREE from 'three';

const EnvironmentGrid = () => {
  const gridRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (gridRef.current) {
        // Subtle drift
        gridRef.current.position.y = -10 + Math.sin(time * 0.2) * 0.5;
        // Subtle tilt
        gridRef.current.rotation.x = -Math.PI / 2 + Math.cos(time * 0.1) * 0.1;
    }
  });

  return (
    <group ref={gridRef} position={[0, -10, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <Grid
        args={[100, 100]}
        cellSize={1}
        cellThickness={1}
        cellColor="#3b82f6"
        sectionSize={5}
        sectionThickness={1.5}
        sectionColor="#3b82f6"
        fadeDistance={50}
        fadeStrength={1}
        infiniteGrid
      />
      
      {/* Decorative center pulse light */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.1]}>
        <planeGeometry args={[200, 200]} />
        <meshBasicMaterial 
            color="#3b82f6" 
            transparent 
            opacity={0.02} 
            side={THREE.DoubleSide} 
        />
      </mesh>
    </group>
  );
};

export default EnvironmentGrid;
