import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration, Glitch } from '@react-three/postprocessing';
import Scene from './components/3d/Scene';
import Particles from './components/3d/Particles';
import Overlay from './components/ui/Overlay';
import Resume2D from './sections/Resume/Resume2D';
import CustomCursor from './components/ui/CustomCursor';
import './styles/App.css';

import WarpOverlay from './components/ui/WarpOverlay';

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [is3D, setIs3D] = useState(true);
  const [isWarping, setIsWarping] = useState(false);

  const handleEnterSection = (section) => {
    setActiveSection(section);
    setIsWarping(true);
    
    // Play warp animation, then switch to 2D view
    setTimeout(() => {
        setIs3D(false);
        setIsWarping(false);
    }, 1200);
  };

  if (!is3D) {
    return <Resume2D initialSection={activeSection} toggleView={() => setIs3D(true)} />;
  }

  return (
    <div className="app-container">
      <CustomCursor />
      <WarpOverlay isWarping={isWarping} />
      <Canvas
        shadows={true}
        camera={{ position: [0, 0, 15], fov: 35 }}
        gl={{ antialias: false, alpha: true }}
      >
        <color attach="background" args={['#020205']} />
        
        <Particles count={6000} activeSection={activeSection} />
        
        <Suspense fallback={null}>
          <Scene activeSection={activeSection} setActiveSection={setActiveSection} />
          
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
          <spotLight 
            position={[-10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={2} 
            castShadow={true} 
            color="#8b5cf6"
          />

          <EffectComposer disableNormalPass>
            <Bloom 
              luminanceThreshold={0.2} 
              mipmapBlur 
              intensity={1.5} 
              radius={0.4} 
            />
            <Noise opacity={0.05} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
            <ChromaticAberration offset={[0.002, 0.002]} />
            <Glitch 
                delay={[1.5, 3.5]} 
                duration={[0.1, 0.3]} 
                strength={[0.1, 0.3]} 
                mode="SPORADIC" 
                active={activeSection === null}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>

      <Overlay 
        activeSection={activeSection}
        toggleView={() => setIs3D(false)} 
        setActiveSection={setActiveSection} 
        handleEnterSection={handleEnterSection}
      />
    </div>
  );
}

export default App;
