import React, { useEffect } from 'react'
import * as THREE from 'three'

export default function Task2() {
  console.log('%c Line:5 🍆 Task1', 'color:#7f2b82')
  useEffect(() => {
    const container = document.getElementById('map')
    const width = container.offsetWidth
    const height = container.offsetHeight

    // 创建 3D 场景对象
    const scene = new THREE.Scene()

    // 创建立方体的几何体
    const geometry = new THREE.BoxGeometry(1, 1, 1)

    // 创建立方体的基础材质
    const material = new THREE.MeshBasicMaterial({
      color: 0x1890ff,
    })

    // 创建 3D 物体对象
    const mesh = new THREE.Mesh(geometry, material)

    scene.add(mesh)

    // 创建相机对象
    const camera = new THREE.PerspectiveCamera(75, width / height)

    // 设置相机位置
    camera.position.set(2, 2, 3)

    // 设置相机朝向
    camera.lookAt(scene.position)

    // 将相机添加到场景中
    scene.add(camera)

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    renderer.setClearColor('#fff')

    container.appendChild(renderer.domElement)

    renderer.render(scene, camera)
  }, [])
  return <div id="map" className="h-screen"></div>
}
