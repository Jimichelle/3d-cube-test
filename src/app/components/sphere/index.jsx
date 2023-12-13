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
                <OrbitControls enableZoom={false}/>
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
        mesh.current.rotation.x += delta * 0;
        mesh.current.rotation.y += delta * 0.25;
        mesh.current.rotation.z += delta * 0;
    

    });

    const texture_1 = useLoader(TextureLoader, "/assets/earth-map.jpg")

    function convertLatLongToCartesian(p){
        let lat = p.lat * (Math.PI / 180);
        let lng = p.long * (Math.PI / 180);

        let z = Math.cos(lat) * Math.sin(lng);
        let x = Math.sin(lat) * Math.sin(lng);
        let y = Math.cos(lat);

        return [x, y, z];
    };

    let pos = convertLatLongToCartesian({lat: 20, long: 10});
    console.log(pos);
 
    


    return (
        <mesh ref = {mesh}>
            <sphereGeometry args={[2]}/>
            <meshStandardMaterial map={texture_1} />
            {/* <mesh ref = {coordRef} position={pos.x, pos.y, pos.z} /> */}
            <points position={[pos[7], pos[1], pos[2]]}/>
        </mesh>
    )
}