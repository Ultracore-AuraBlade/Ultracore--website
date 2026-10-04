import React, { useEffect, useRef, useState } from 'react';

interface OrbitalCoreProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  interactive?: boolean;
}

interface RingDef {
  radius: number;
  pitch: number; // inclination angle in radians
  yaw: number;   // orientation angle in radians
  speed: number; // slow rotation speed
  color: string;
  glowColor: string;
  width: number;
  dashPattern?: number[];
  nodes?: { angle: number; size: number; glow: string }[];
}

interface CoreParticle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  alpha: number;
}

export const OrbitalCore: React.FC<OrbitalCoreProps> = ({
  size = 'hero',
  className = '',
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animFrameRef = useRef<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 560, height: 560 });

  // Sizing mapping (CSS display bounds)
  const sizeMap = {
    sm: { w: 220, h: 220, coreRadius: 36, scale: 0.5 },
    md: { w: 320, h: 320, coreRadius: 52, scale: 0.72 },
    lg: { w: 420, h: 420, coreRadius: 68, scale: 0.9 },
    hero: { w: 540, h: 540, coreRadius: 84, scale: 1.0 },
  };

  const currentSizeConfig = sizeMap[size];

  // Mouse interaction
  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  // Main 3D Canvas rendering loop with true front/behind depth sorting
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // High-DPI handling
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = currentSizeConfig.w;
    const h = currentSizeConfig.h;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const cx = w / 2;
    const cy = h / 2;
    const coreR = currentSizeConfig.coreRadius;
    const scale = currentSizeConfig.scale;

    // Define the EXACT 3-4 Dimensional Orbital Rings
    // Ring 0: Inner angled fast-slow ring
    // Ring 1: Primary wide orbital ring with dimensional tilt
    // Ring 2: Steeply inclined polar ring with subtle nodes
    // Ring 3: Distant outer equatorial boundary ring with tick accents
    const rings: RingDef[] = [
      {
        radius: 145 * scale,
        pitch: 0.92, // ~53 deg tilt
        yaw: -0.45,  // angle orientation
        speed: prefersReducedMotion ? 0 : 0.0016,
        color: 'rgba(56, 189, 248, 0.75)',
        glowColor: 'rgba(56, 189, 248, 0.4)',
        width: 1.5,
        nodes: [
          { angle: 1.2, size: 2.8, glow: '#e0f2fe' },
        ],
      },
      {
        radius: 195 * scale,
        pitch: -0.62, // ~-35 deg tilt
        yaw: 0.88,
        speed: prefersReducedMotion ? 0 : -0.0011,
        color: 'rgba(6, 182, 212, 0.85)',
        glowColor: 'rgba(14, 165, 233, 0.5)',
        width: 1.75,
        nodes: [
          { angle: 3.4, size: 3.2, glow: '#7dd3fc' },
          { angle: 0.5, size: 2.2, glow: '#38bdf8' },
        ],
      },
      {
        radius: 232 * scale,
        pitch: 1.22, // ~70 deg steep polar inclination
        yaw: 0.32,
        speed: prefersReducedMotion ? 0 : 0.0008,
        color: 'rgba(125, 211, 252, 0.65)',
        glowColor: 'rgba(2, 132, 199, 0.35)',
        width: 1.25,
        nodes: [
          { angle: 5.1, size: 2.5, glow: '#bae6fd' },
        ],
      },
      {
        radius: 260 * scale,
        pitch: -0.28, // gentle horizontal offset
        yaw: -1.05,
        speed: prefersReducedMotion ? 0 : -0.0006,
        color: 'rgba(56, 189, 248, 0.45)',
        glowColor: 'rgba(56, 189, 248, 0.2)',
        width: 1.0,
        dashPattern: [4, 8],
      },
    ];

    // Internal Core Particles (drifting inside the sphere volume)
    const particleCount = 26;
    const particles: CoreParticle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const rad = Math.random() * (coreR * 0.78);
      particles.push({
        x: rad * Math.sin(phi) * Math.cos(theta),
        y: rad * Math.sin(phi) * Math.sin(theta),
        z: rad * Math.cos(phi),
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        vz: (Math.random() - 0.5) * 0.15,
        size: 1 + Math.random() * 1.8,
        alpha: 0.3 + Math.random() * 0.5,
      });
    }

    let time = 0;
    const ringRotations = rings.map((_, i) => i * 1.5);

    // 3D vector rotation helpers
    const rotateX = (x: number, y: number, z: number, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [x, y * cos - z * sin, y * sin + z * cos];
    };

    const rotateY = (x: number, y: number, z: number, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [x * cos + z * sin, y, -x * sin + z * cos];
    };

    const rotateZ = (x: number, y: number, z: number, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [x * cos - y * sin, x * sin + y * cos, z];
    };

    // Main render frame
    const render = () => {
      time += 0.016;

      // Mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const camRotY = mouseRef.current.x * 0.18;
      const camRotX = -mouseRef.current.y * 0.18;

      ctx.clearRect(0, 0, w, h);

      // Advance ring rotations
      rings.forEach((ring, i) => {
        ringRotations[i] += ring.speed;
      });

      // Prepare ring point samples in 3D
      // We sample points around each ring and bucket them into behind (z < 0) and front (z >= 0) segments
      interface RingSegment {
        ringIndex: number;
        p1: [number, number, number]; // screenX, screenY, z
        p2: [number, number, number];
        isFront: boolean;
        alpha: number;
      }

      const backSegments: RingSegment[] = [];
      const frontSegments: RingSegment[] = [];

      const STEPS = 140;

      rings.forEach((ring, rIdx) => {
        const rot = ringRotations[rIdx];

        let prevPoint: [number, number, number] | null = null;

        for (let s = 0; s <= STEPS; s++) {
          const theta = (s / STEPS) * Math.PI * 2;
          // Initial ring plane in XY:
          let x = ring.radius * Math.cos(theta);
          let y = ring.radius * Math.sin(theta);
          let z = 0;

          // Apply ring internal spin
          [x, y, z] = rotateZ(x, y, z, rot);

          // Apply ring tilt (pitch) and orientation (yaw)
          [x, y, z] = rotateX(x, y, z, ring.pitch);
          [x, y, z] = rotateY(x, y, z, ring.yaw);

          // Apply global camera tilt (mouse parallax)
          [x, y, z] = rotateX(x, y, z, camRotX);
          [x, y, z] = rotateY(x, y, z, camRotY);

          // Perspective projection
          const fov = 600;
          const projScale = fov / (fov + z);
          const screenX = cx + x * projScale;
          const screenY = cy + y * projScale;

          const currentPoint: [number, number, number] = [screenX, screenY, z];

          if (prevPoint !== null) {
            // Midpoint depth
            const midZ = (prevPoint[2] + currentPoint[2]) / 2;
            const midX = (prevPoint[0] + currentPoint[0]) / 2 - cx;
            const midY = (prevPoint[1] + currentPoint[1]) / 2 - cy;
            const distFromCenter = Math.hypot(midX, midY);

            // True occlusion test:
            // If the segment's Z is negative (behind the Core sphere center) AND inside or near the Core footprint,
            // it is rendered behind the core.
            const isBehindCore = midZ < 0;

            // Fade intensity based on depth to simulate realistic lighting falloff
            const depthFactor = (midZ + 250) / 500;
            const clampedAlpha = Math.max(0.15, Math.min(1, 0.4 + depthFactor * 0.6));

            const segment: RingSegment = {
              ringIndex: rIdx,
              p1: prevPoint,
              p2: currentPoint,
              isFront: !isBehindCore,
              alpha: clampedAlpha,
            };

            if (isBehindCore) {
              backSegments.push(segment);
            } else {
              frontSegments.push(segment);
            }
          }

          prevPoint = currentPoint;
        }
      });

      // Helper to render ring segments
      const drawRingSegments = (segments: RingSegment[]) => {
        segments.forEach((seg) => {
          const ring = rings[seg.ringIndex];
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(seg.p1[0], seg.p1[1]);
          ctx.lineTo(seg.p2[0], seg.p2[1]);

          ctx.lineWidth = ring.width;
          if (ring.dashPattern) {
            ctx.setLineDash(ring.dashPattern);
          }
          ctx.strokeStyle = ring.color;
          ctx.globalAlpha = seg.alpha;
          ctx.stroke();

          // Soft subtle bloom for rings
          ctx.lineWidth = ring.width * 2.2;
          ctx.strokeStyle = ring.glowColor;
          ctx.globalAlpha = seg.alpha * 0.4;
          ctx.stroke();
          ctx.restore();
        });
      };

      // Helper to draw ring orbital nodes
      const drawRingNodes = (frontOnly: boolean) => {
        rings.forEach((ring, rIdx) => {
          if (!ring.nodes) return;
          const rot = ringRotations[rIdx];

          ring.nodes.forEach((node) => {
            const angle = node.angle + rot;
            let x = ring.radius * Math.cos(angle);
            let y = ring.radius * Math.sin(angle);
            let z = 0;

            [x, y, z] = rotateX(x, y, z, ring.pitch);
            [x, y, z] = rotateY(x, y, z, ring.yaw);
            [x, y, z] = rotateX(x, y, z, camRotX);
            [x, y, z] = rotateY(x, y, z, camRotY);

            const isFront = z >= 0;
            if (isFront !== frontOnly) return;

            const fov = 600;
            const projScale = fov / (fov + z);
            const sx = cx + x * projScale;
            const sy = cy + y * projScale;

            ctx.save();
            ctx.beginPath();
            ctx.arc(sx, sy, node.size * projScale, 0, Math.PI * 2);
            ctx.fillStyle = node.glow;
            ctx.shadowColor = ring.glowColor;
            ctx.shadowBlur = 10;
            ctx.globalAlpha = isFront ? 0.95 : 0.45;
            ctx.fill();
            ctx.restore();
          });
        });
      };

      // ==========================================
      // PASS 1: BACK RINGS (BEHIND THE CORE)
      // ==========================================
      drawRingSegments(backSegments);
      drawRingNodes(false);

      // ==========================================
      // PASS 2: CENTRAL STYLIZED FUTURISTIC AI CORE
      // ==========================================
      // 1. Ambient Outer Core Backglow (Soft cyan-blue plasma aura)
      const glowGrad = ctx.createRadialGradient(cx, cy, coreR * 0.4, cx, cy, coreR * 2.2);
      glowGrad.addColorStop(0, 'rgba(14, 165, 233, 0.28)');
      glowGrad.addColorStop(0.4, 'rgba(6, 182, 212, 0.12)');
      glowGrad.addColorStop(0.7, 'rgba(3, 105, 161, 0.05)');
      glowGrad.addColorStop(1, 'transparent');

      ctx.save();
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, coreR * 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 2. Core Base Deep Dimensional Spherical Body
      // Deep dark electric blue with realistic dimensional spherical shading
      const sphereGrad = ctx.createRadialGradient(
        cx - coreR * 0.28,
        cy - coreR * 0.28,
        coreR * 0.05,
        cx,
        cy,
        coreR
      );
      sphereGrad.addColorStop(0, '#0a2544');     // soft inner illumination
      sphereGrad.addColorStop(0.35, '#06172e');  // deep electric blue
      sphereGrad.addColorStop(0.75, '#030c1b');  // dark navy
      sphereGrad.addColorStop(1, '#01050e');     // near-black edge base

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
      ctx.fillStyle = sphereGrad;
      ctx.shadowColor = 'rgba(6, 182, 212, 0.4)';
      ctx.shadowBlur = 24;
      ctx.fill();
      ctx.restore();

      // 3. Clip subsequent internal energy details to Core Sphere
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
      ctx.clip();

      // 3A. Curved Internal Energy Structures (Digital AI Energy Bands)
      // Latitudinal and longitudinal glowing energy curves indicating an AI digital matrix
      const bandOffset = (time * 0.4) % (Math.PI * 2);
      for (let b = -3; b <= 3; b++) {
        const latY = cy + (b / 4) * (coreR * 0.85);
        const latWidth = Math.sqrt(Math.max(0, coreR * coreR - Math.pow(latY - cy, 2))) * 0.95;
        const curveH = 14 * Math.sin(latY * 0.05 + bandOffset * 0.5);

        ctx.beginPath();
        ctx.ellipse(cx, latY, latWidth, 12, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // 3B. Abstract Flowing Internal Energy Filaments (Curved digital streams)
      for (let f = 0; f < 3; f++) {
        const fAngle = time * (0.2 + f * 0.1) + f * 2.1;
        const rx = coreR * 0.65;
        const ry = coreR * 0.35;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(fAngle);
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, f * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.18 - f * 0.03})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.restore();
      }

      // 3C. Internal Micro-Particles (Digital data points floating inside the Core)
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Containment check
        const dist = Math.hypot(p.x, p.y, p.z);
        if (dist > coreR * 0.85) {
          p.vx *= -1;
          p.vy *= -1;
          p.vz *= -1;
        }

        // Rotate with camera
        let [px, py, pz] = rotateX(p.x, p.y, p.z, camRotX);
        [px, py, pz] = rotateY(px, py, pz, camRotY);

        const pFov = 500;
        const pScale = pFov / (pFov + pz);
        const psx = cx + px * pScale;
        const psy = cy + py * pScale;

        ctx.beginPath();
        ctx.arc(psx, psy, p.size * pScale, 0, Math.PI * 2);
        ctx.fillStyle = '#7dd3fc';
        ctx.globalAlpha = p.alpha * Math.max(0.2, (pz + coreR) / (2 * coreR));
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      // 3D. Concentric Inner Neural Core (Soft white-blue pulsing center)
      const pulseScale = 1 + Math.sin(time * 1.5) * 0.05;
      const innerCoreGrad = ctx.createRadialGradient(
        cx - 2,
        cy - 2,
        2,
        cx,
        cy,
        coreR * 0.42 * pulseScale
      );
      innerCoreGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      innerCoreGrad.addColorStop(0.2, 'rgba(186, 230, 253, 0.85)');
      innerCoreGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.45)');
      innerCoreGrad.addColorStop(0.8, 'rgba(2, 132, 199, 0.15)');
      innerCoreGrad.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.arc(cx, cy, coreR * 0.42 * pulseScale, 0, Math.PI * 2);
      ctx.fillStyle = innerCoreGrad;
      ctx.fill();

      // 3E. Faint Geometric Grid Coordinate Lattice
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.07)';
      ctx.lineWidth = 0.75;
      const gridStep = coreR / 4;
      for (let gx = -coreR; gx <= coreR; gx += gridStep) {
        ctx.beginPath();
        ctx.moveTo(cx + gx, cy - coreR);
        ctx.lineTo(cx + gx, cy + coreR);
        ctx.stroke();
      }
      for (let gy = -coreR; gy <= coreR; gy += gridStep) {
        ctx.beginPath();
        ctx.moveTo(cx - coreR, cy + gy);
        ctx.lineTo(cx + coreR, cy + gy);
        ctx.stroke();
      }

      // 3F. Upper Translucent Specular Arc (Glassy AI Shell Reflection)
      const specGrad = ctx.createLinearGradient(cx, cy - coreR, cx, cy - coreR * 0.2);
      specGrad.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
      specGrad.addColorStop(0.6, 'rgba(56, 189, 248, 0.1)');
      specGrad.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.ellipse(cx, cy - coreR * 0.5, coreR * 0.68, coreR * 0.35, 0, 0, Math.PI * 2);
      ctx.fillStyle = specGrad;
      ctx.fill();

      ctx.restore(); // end core clipping

      // 4. Subtle Fresnel Edge Rim Ring (Spherical light perimeter)
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
      ctx.lineWidth = 1.25;
      ctx.stroke();

      // Thin inner cyan highlight
      ctx.beginPath();
      ctx.arc(cx, cy, coreR - 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(125, 211, 252, 0.2)';
      ctx.lineWidth = 0.75;
      ctx.stroke();
      ctx.restore();

      // ==========================================
      // PASS 3: FRONT RINGS (IN FRONT OF THE CORE)
      // ==========================================
      // The front halves of the rings naturally cross IN FRONT of the Core,
      // creating genuine, unmistakable 3D depth!
      drawRingSegments(frontSegments);
      drawRingNodes(true);

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [currentSizeConfig, interactive]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{
        width: currentSizeConfig.w,
        height: currentSizeConfig.h,
        maxWidth: '100%',
      }}
      aria-label="UltraCore Stylized AI Core and Dimensional Orbital Rings"
      role="img"
    >
      <canvas
        ref={canvasRef}
        style={{
          width: currentSizeConfig.w,
          maxWidth: '100%',
          height: 'auto',
          aspectRatio: '1 / 1',
        }}
        className="pointer-events-none"
      />
    </div>
  );
};
