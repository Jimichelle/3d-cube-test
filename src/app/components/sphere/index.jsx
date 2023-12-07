"use client"

import React, {useRef} from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import styles from './styles.module.scss';
import { OrbitControls } from "@react-three/drei";

export default function sphere() {
    return (
        <div className={styles.main}>
            <Canvas>
                <OrbitControls />
                <ambientLight  intensity={2}/>
                <directionalLight position={[2, 1, 1]} />
                <Sphere />
            </Canvas>
        </div>
    )
}

function Sphere() {

    const mesh = useRef( null );

    useFrame( (state, delta) => {
        mesh.current.rotation.x += delta * 0.25;
        mesh.current.rotation.y += delta * 0.25;
        mesh.current.rotation.z += delta * 0.25;

    });


    return (
        <mesh ref = {mesh}>
            <sphereGeometry args={[2]}/>
            <meshStandardMaterial color={"orange"} />

        </mesh>
    )
}