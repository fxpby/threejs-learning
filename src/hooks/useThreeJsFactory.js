import * as THREE from 'three'
import React, { useState } from 'react'

const useThreeJsFactory = () => {
  const [scene, setScene] = useState(null)
  const [canvas, setCanvas] = useState(null)

  const [width, setWidth] = useState(null)
  const [height, setHeight] = useState(null)

  const [mesh, setMesh] = useState(null)

  // 创建场景
  const createScene = ({ sceneId } = {}) => {
    const canvas = document.getElementById(sceneId)

    const width = window.innerWidth
    const height = window.innerHeight

    setWidth(width)
    setHeight(height)

    canvas.width = width
    canvas.height = height

    setCanvas(canvas)

    const scene = new THREE.Scene()
    setScene(scene)
  }

  // 创建光照
  const createLights = () => {
    // 添加全局光照
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    scene.add(ambientLight, directionalLight)
  }

  const createObjects = () => {
    // 创建立方体几何体
    const geometry = new THREE.BoxGeometry(1, 1, 1)

    // 创建立方体材质
    const material = new THREE.MeshLambertMaterial({
      color: 0x1890ff,
    })

    // 创建3D物体对象
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    setMesh(mesh)
  }

  const createCamera = () => {
    // 创建相机对象
    const camera = new THREE.PerspectiveCamera(75, width / height)

    // 设置相机位置
    camera.position.set(2, 2, 3)

    // 设置相机朝向
  }

  return {
    scene,
    createScene,
    createLights,
    createObjects,
    createCamera,
  }
}

export default useThreeJsFactory
