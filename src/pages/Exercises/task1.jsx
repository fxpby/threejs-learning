import React, { useEffect } from 'react'
import * as THREE from 'three'

export default function Task1() {
  useEffect(() => {
    // dom
    const container = document.getElementById('map')
    const width = container.offsetWidth
    const height = container.offsetHeight

    // 三大要素

    // 场景
    const scene = new THREE.Scene()

    // 相机
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)

    // 设置位置
    camera.position.set(100, 100, 100)
    camera.lookAt(0, 0, 0)

    // 渲染器 - 抗锯齿
    const renderer = new THREE.WebGLRenderer({ antialias: true })

    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)
    renderer.setClearColor('#000')

    // 物体
    const box = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10))
    scene.add(box)
    box.position.set(0, 0, 0)

    // 渲染
    renderer.render(scene, camera)
  }, [])
  return <div id="map" className="h-screen"></div>
}
