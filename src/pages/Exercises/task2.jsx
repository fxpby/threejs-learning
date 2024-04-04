import React, { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'

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
    console.log('%c Line:16 🍕 geometry', 'color:#4fff4B', geometry)

    // 创建立方体的基础材质
    // const material = new THREE.MeshLambertMaterial({
    //   color: 0x1890ff,
    //   wireframe: true,
    // })

    const faces = geometry.groups.map(
      () => new THREE.MeshBasicMaterial({ color: 0xffffff * Math.random() }),
    )

    // 添加全局光照
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)

    // 添加方向光照
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)

    scene.add(ambientLight, directionalLight)

    // 创建辅助坐标系
    const axesHelper = new THREE.AxesHelper()

    // 创建辅助平面
    const gridHelper = new THREE.GridHelper()

    scene.add(axesHelper, gridHelper)

    // 创建 3D 物体对象
    const mesh = new THREE.Mesh(geometry, faces)

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

    // 设置渲染器屏幕像素比
    renderer.setPixelRatio(window.devicePixelRatio || 1)

    container.appendChild(renderer.domElement)

    // renderer.render(scene, camera)

    // 轨道控制器
    const orbitControls = new OrbitControls(camera, container)

    orbitControls.enableDamping = true

    // 添加性能监视器
    const stats = new Stats()
    stats.setMode(0)
    container.appendChild(stats.domElement)

    const clock = new THREE.Clock()

    const tick = () => {
      const elapsedTime = clock.getElapsedTime()

      // mesh.rotation.y += elapsedTime / 1000
      // mesh.position.x += elapsedTime / 1000
      // mesh.scale.x += elapsedTime / 1000

      // mesh.position.x = Math.cos(elapsedTime)
      // mesh.position.y = Math.sin(elapsedTime)

      camera.position.x = Math.cos(elapsedTime)
      camera.position.y = Math.sin(elapsedTime)

      orbitControls.update()
      stats.update()
      renderer.render(scene, camera)
      window.requestAnimationFrame(tick)
    }

    tick()

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      renderer.setSize(window.innerWidth, window.innerHeight)
    })
  }, [])
  return <div id="map" className="h-screen"></div>
}
