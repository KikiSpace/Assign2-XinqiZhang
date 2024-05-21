/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: travp333 (https://sketchfab.com/travp333)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/trash-bins-dcd2000590ae4d4d88a429d52798a2ff
Title: Trash Bins
*/

import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import trashBinsScene from '../assets/3d/trash_bins.glb'
const TrashBins = ({isRotating, setIsRotating,setCurrentStage,currentFocusPoint, ...props}) => {
    const trashBinsRef = useRef()

    const { gl, viewport } = useThree()
    const { nodes, materials } = useGLTF(trashBinsScene)

    const lastX = useRef(0)
    const rotationSpeed = useRef(0)
    const dampingFactor = 0.95

    const handlePointerDown = (e) => { 
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);

        const clientx = e.touches ? e.touches[0].clientX : e.clientX;

        lastX.current = clientx;
    }

    const handlePointerUp = (e) => { 
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);

    }

    const handlePointerMove = (e) => { 
        e.stopPropagation();
        e.preventDefault();
        if (isRotating) {
        // If rotation is enabled, calculate the change in clientX position
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;

        // calculate the change in the horizontal position of the mouse cursor or touch input,
        // relative to the viewport's width
        const delta = (clientX - lastX.current) / viewport.width;

        // Update the island's rotation based on the mouse/touch movement
        trashBinsRef.current.rotation.y += delta * 0.01 * Math.PI;

        // Update the reference for the last clientX position
        lastX.current = clientX;

        // Update the rotation speed
        rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }

    const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      trashBinsRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      trashBinsRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  // Handle keyup events
  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  // Touch events for mobile devices
  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
  
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }
  
  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }
  
  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
  
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
  
      trashBinsRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

    useEffect(() => {
    // Add event listeners for pointer and keyboard events
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

    
      useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      trashBinsRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = trashBinsRef.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

    return (
        <a.group ref={trashBinsRef} {...props}>
        <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group position={[0, -198.023, 339.032]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                geometry={nodes.Cube003_Material003_0.geometry}
                material={materials['Material.003']}
                />
                <mesh
                geometry={nodes.Cube003_Material002_0.geometry}
                material={materials['Material.002']}
                />
                <mesh
                geometry={nodes.Cube003_Material_0.geometry}
                material={materials.Material}
                />
                <mesh
                geometry={nodes.Cube003_Material001_0.geometry}
                material={materials['Material.001']}
                />
            </group>
            </group>
        </group>
        </a.group>
    )
}
export default TrashBins