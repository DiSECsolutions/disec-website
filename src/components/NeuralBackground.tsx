"use client";

import React, { useRef, useEffect } from "react";

export const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 3D Grid parameters
    const gridCols = 25;
    const gridRows = 25;
    const spacingX = 80; // Distance between columns
    const spacingY = 80; // Distance between rows
    
    // Rotation and translation angles
    let angleX = 1.1; // Dip tilt (in radians)
    let angleY = 0.45; // Rotation (in radians)
    let targetAngleX = 1.1;
    let targetAngleY = 0.45;

    let time = 0;

    // Track mouse to update perspective parallax targets
    const handleMouseMove = (e: MouseEvent) => {
      // Map mouse x/y to small rotation offsets
      const dx = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const dy = (e.clientY - window.innerHeight / 2) / window.innerHeight;
      
      targetAngleY = 0.45 + dx * 0.25;
      targetAngleX = 1.1 + dy * 0.15;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Coordinate projection function
    // Translates 3D coordinates (x, y, z) into 2D screen space (px, py)
    const project = (x3d: number, y3d: number, z3d: number) => {
      // Translate coordinates to center origin
      const tempX = x3d - (gridCols * spacingX) / 2;
      const tempY = y3d - (gridRows * spacingY) / 2;
      const tempZ = z3d;

      // Rotate around Y axis
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const rotY_X = tempX * cosY - tempZ * sinY;
      const rotY_Z = tempX * sinY + tempZ * cosY;

      // Rotate around X axis
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const rotX_Y = tempY * cosX - rotY_Z * sinX;
      const rotX_Z = tempY * sinX + rotY_Z * cosX;

      // Simple perspective projection calculation
      const fov = 800; // Field of view depth
      const scale = fov / (fov + rotX_Z);
      
      const projX = width / 2 + rotY_X * scale;
      const projY = height / 2.3 + rotX_Y * scale; // Offset origin slightly upwards

      return { x: projX, y: projY, depth: rotX_Z };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      time += 0.015;

      // Smoothly interpolate rotation angles toward target mouse parallax
      angleX += (targetAngleX - angleX) * 0.05;
      angleY += (targetAngleY - angleY) * 0.05;

      // Pre-compute all projected 2D coordinates for grid nodes
      const projectedGrid: { x: number; y: number; z: number; px: number; py: number; depth: number }[][] = [];

      for (let r = 0; r < gridRows; r++) {
        projectedGrid[r] = [];
        for (let c = 0; c < gridCols; c++) {
          const x3d = c * spacingX;
          const y3d = r * spacingY;

          // Multi-wave wave height generator
          // Generates interference ripple coordinates based on diagonal distance
          const distFromCenter = Math.sqrt(Math.pow(c - gridCols / 2, 2) + Math.pow(r - gridRows / 2, 2));
          const waveHeight = Math.sin(distFromCenter * 0.3 - time * 1.5) * Math.cos(c * 0.15 - time) * 35;
          const z3d = waveHeight;

          const proj = project(x3d, y3d, z3d);
          projectedGrid[r][c] = { x: x3d, y: y3d, z: z3d, px: proj.x, py: proj.y, depth: proj.depth };
        }
      }

      // Draw horizontal and vertical connecting lines
      for (let r = 0; r < gridRows; r++) {
        for (let c = 0; c < gridCols; c++) {
          const node = projectedGrid[r][c];

          // Draw line to right neighbor
          if (c < gridCols - 1) {
            const neighbor = projectedGrid[r][c + 1];
            // Compute alpha based on depth and distance to fade lines at border limits
            const avgDepth = (node.depth + neighbor.depth) / 2;
            const alpha = Math.max(0, Math.min(0.18, 0.15 - avgDepth * 0.0003));

            if (alpha > 0) {
              ctx.beginPath();
              ctx.moveTo(node.px, node.py);
              ctx.lineTo(neighbor.px, neighbor.py);
              ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }

          // Draw line to bottom neighbor
          if (r < gridRows - 1) {
            const neighbor = projectedGrid[r + 1][c];
            const avgDepth = (node.depth + neighbor.depth) / 2;
            const alpha = Math.max(0, Math.min(0.18, 0.15 - avgDepth * 0.0003));

            if (alpha > 0) {
              ctx.beginPath();
              ctx.moveTo(node.px, node.py);
              ctx.lineTo(neighbor.px, neighbor.py);
              ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }

          // Draw glowing node points
          const nodeAlpha = Math.max(0, Math.min(0.6, 0.45 - node.depth * 0.0003));
          if (nodeAlpha > 0) {
            ctx.beginPath();
            ctx.arc(node.px, node.py, 1.2, 0, Math.PI * 2);
            // Highlights peak wave values in purple and valley wave values in cyan
            if (node.z > 15) {
              ctx.fillStyle = `rgba(139, 92, 246, ${nodeAlpha})`;
            } else {
              ctx.fillStyle = `rgba(0, 212, 255, ${nodeAlpha})`;
            }
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
export default NeuralBackground;
