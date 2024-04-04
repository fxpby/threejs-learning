import React, { useEffect } from 'react'
import * as THREE from 'three'

export default function Task1() {
  console.log('%c Line:5 🍆 Task1', 'color:#7f2b82')
  useEffect(() => {
    // // dom
    // const container = document.getElementById('map')
    // const width = container.offsetWidth
    // const height = container.offsetHeight

    // // 三大要素

    // // 场景
    // const scene = new THREE.Scene()

    // // 相机
    // const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)

    // // 设置位置
    // camera.position.set(100, 100, 100)
    // camera.lookAt(0, 0, 0)

    // // 渲染器 - 抗锯齿
    // const renderer = new THREE.WebGLRenderer({ antialias: true })

    // renderer.setSize(width, height)
    // container.appendChild(renderer.domElement)
    // renderer.setClearColor('#000')

    // // 物体
    // const box = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10))
    // scene.add(box)
    // box.position.set(0, 0, 0)

    // // 渲染
    // renderer.render(scene, camera)

    // 创建场景
    let scene = new THREE.Scene()

    // 创建相机
    let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    camera.position.set(2, 2, 2)
    camera.lookAt(0, 0, 0)

    // 创建渲染器
    let renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    let geometry = new THREE.TetrahedronGeometry() // 创建一种几何形状（这个例子中使用的是四面体）
    let material = new THREE.MeshBasicMaterial({ color: 0xffffff }) // 创建制作的材料的颜色和种类

    let dumpling = new THREE.Mesh(geometry, material) // 创建一个网格对象，也就是在场景中实实在在的物体。

    scene.add(dumpling) // 把网格添加到场景中

    // 创建动画
    function animate() {
      requestAnimationFrame(animate)
      dumpling.rotation.x += 0.01
      dumpling.rotation.y += 0.01
      renderer.render(scene, camera)
    }

    animate()
  }, [])
  return <div id="map" className="h-screen"></div>
}
