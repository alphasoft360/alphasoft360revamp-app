"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Mail, Phone, RotateCw, ShieldCheck, CheckCircle2 } from "lucide-react";

type Member = {
  id: string;
  image: string;
  name: string;
  role: string;
  bio: string;
  contact?: {
    email?: string;
    phone?: string;
  };
  socials?: Partial<Record<string, string>>;
};

export default function IdCard3D({ member }: { member: Member }) {
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isFlipped, setIsFlipped] = useState(false);
  const startPosRef = useRef({ x: 0, y: 0 });
  const currentRotRef = useRef({ x: 0, y: 0 });
  const autoReturnTimeout = useRef<NodeJS.Timeout | null>(null);

  const isExecutive =
    member?.role?.toLowerCase().includes("ceo") ||
    member?.role?.toLowerCase().includes("coo") ||
    member?.role?.toLowerCase().includes("founder");

  const cardId = `AS360-${(member?.name || "MEMBER")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toUpperCase()
    .slice(0, 8)}-001`;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (autoReturnTimeout.current) clearTimeout(autoReturnTimeout.current);
    setIsDragging(true);
    startPosRef.current = { x: e.clientX, y: e.clientY };
    currentRotRef.current = { ...rotation };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPosRef.current.x;
    const deltaY = e.clientY - startPosRef.current.y;

    setRotation({
      x: Math.max(-45, Math.min(45, currentRotRef.current.x - deltaY * 0.4)),
      y: currentRotRef.current.y + deltaX * 0.5,
    });
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // If rotated past 90deg, update flip state
    const normalizedY = Math.abs(rotation.y % 360);
    if (normalizedY > 90 && normalizedY < 270) {
      setIsFlipped(true);
    } else {
      setIsFlipped(false);
    }

    autoReturnTimeout.current = setTimeout(() => {
      setRotation((prev) => ({
        x: 0,
        y: isFlipped ? 180 : 0,
      }));
    }, 1200);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (autoReturnTimeout.current) clearTimeout(autoReturnTimeout.current);
    const touch = e.touches[0];
    setIsDragging(true);
    startPosRef.current = { x: touch.clientX, y: touch.clientY };
    currentRotRef.current = { ...rotation };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - startPosRef.current.x;
    const deltaY = touch.clientY - startPosRef.current.y;

    setRotation({
      x: Math.max(-45, Math.min(45, currentRotRef.current.x - deltaY * 0.4)),
      y: currentRotRef.current.y + deltaX * 0.5,
    });
  };

  const toggleFlip = () => {
    const nextFlipped = !isFlipped;
    setIsFlipped(nextFlipped);
    setRotation({ x: 0, y: nextFlipped ? 180 : 0 });
  };

  useEffect(() => {
    return () => {
      if (autoReturnTimeout.current) clearTimeout(autoReturnTimeout.current);
    };
  }, []);

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://alphasoft360.com/team/${member.id}&color=0f172a&bgcolor=ffffff`;

  return (
    <div className="flex flex-col items-center select-none py-4">
      {/* 3D Scene Wrapper */}
      <div
        className="relative w-[310px] sm:w-[340px] h-[500px] sm:h-[530px] flex justify-center items-start cursor-grab active:cursor-grabbing perspective-1000"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Metal Lanyard Clip */}
        <div className="absolute -top-3 z-30 flex flex-col items-center pointer-events-none">
          <div className="w-10 h-5 bg-gradient-to-b from-gray-300 via-gray-100 to-gray-400 rounded-t-md shadow-md border border-gray-400/50 flex items-center justify-center">
            <div className="w-6 h-1 bg-gray-600 rounded-full" />
          </div>
          <div className="w-5 h-4 bg-gradient-to-b from-gray-400 via-gray-200 to-gray-500 rounded-sm -mt-0.5 shadow-sm border border-gray-400/60" />
        </div>

        {/* Card Container with 3D Transform */}
        <div
          className="relative w-full h-full preserve-3d transition-transform duration-300 ease-out"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y + (isFlipped ? 180 : 0)}deg)`,
            transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.15, 0.85, 0.35, 1.2)",
          }}
        >
          {/* FRONT SIDE */}
          <div className="absolute inset-0 w-full h-full rounded-2xl bg-surface border border-line shadow-2xl overflow-hidden flex flex-col backface-hidden">
            {/* Top Accent Band */}
            <div className="h-2.5 bg-gradient-to-r from-accent via-accent-2 to-accent" />

            {/* Header / Logo */}
            <div className="p-4 pb-3 text-center border-b border-line/40 relative bg-gradient-to-b from-accent/5 to-transparent flex flex-col items-center">
              <Image
                src="/brand/logo-alt.png"
                alt="AlphaSoft360 Logo"
                width={150}
                height={55}
                className="h-10 w-auto object-contain mx-auto"
                priority
              />
              <p className="text-[10px] text-muted tracking-wide font-medium uppercase mt-1">
                Innovative Digital Solutions
              </p>
            </div>

            {/* Profile Content */}
            <div className="p-5 flex-1 flex flex-col items-center justify-between">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-accent to-accent-2 shadow-lg mb-3">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-foreground">
                  {member.name}
                </h3>
                <span className="mt-1 px-3 py-0.5 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20">
                  {member.role}
                </span>
              </div>

              {/* Info Table */}
              <div className="w-full bg-background/60 rounded-xl p-3 border border-line/50 text-xs space-y-2 mt-3">
                <div className="flex justify-between items-center text-muted">
                  <span className="font-medium text-muted/80">Card ID:</span>
                  <span className="font-mono text-foreground font-semibold">{cardId}</span>
                </div>

                {member.contact?.email && (
                  <div className="flex justify-between items-center text-muted gap-2">
                    <span className="font-medium text-muted/80 shrink-0">Email:</span>
                    <a
                      href={`mailto:${member.contact.email}`}
                      className="text-accent hover:underline truncate max-w-[170px]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {member.contact.email}
                    </a>
                  </div>
                )}

                {member.contact?.phone && (
                  <div className="flex justify-between items-center text-muted gap-2">
                    <span className="font-medium text-muted/80 shrink-0">Phone:</span>
                    <a
                      href={`tel:${member.contact.phone.replace(/\s/g, "")}`}
                      className="text-foreground hover:text-accent font-mono"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {member.contact.phone}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Card Footer */}
            <div className="bg-gradient-to-r from-accent/90 to-accent-2/90 py-2 text-center border-t border-accent/20">
              <span className="text-[11px] font-bold tracking-widest text-white uppercase">
                WWW.ALPHASOFT360.COM
              </span>
            </div>
          </div>

          {/* BACK SIDE */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl bg-surface border border-line shadow-2xl overflow-hidden flex flex-col backface-hidden"
            style={{ transform: "rotateY(180deg)" }}
          >
            {/* Top Accent Band */}
            <div className="h-2.5 bg-gradient-to-r from-accent-2 via-accent to-accent-2" />

            <div className="p-5 flex-1 flex flex-col items-center justify-between text-center">
              {/* Back Header */}
              <div className="space-y-1 mt-2">
                <div className="flex items-center justify-center gap-1.5 text-accent">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="font-bold text-sm tracking-wide text-foreground uppercase">
                    Official Verification Pass
                  </span>
                </div>
                <p className="text-[11px] text-muted max-w-[220px] mx-auto">
                  Scan the QR code to verify team membership and credentials.
                </p>
              </div>

              {/* QR Code Frame */}
              <div className="p-3 rounded-2xl bg-white shadow-md border border-gray-200 my-3 relative group">
                <Image
                  src={qrCodeUrl}
                  alt="Member Verification QR Code"
                  width={130}
                  height={130}
                  className="rounded-lg"
                  unoptimized
                />
              </div>

              {/* Security Details */}
              <div className="w-full bg-background/60 rounded-xl p-3 border border-line/50 text-xs space-y-1.5">
                <div className="flex justify-between items-center text-muted">
                  <span>Status:</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Verified Member
                  </span>
                </div>
                <div className="flex justify-between items-center text-muted">
                  <span>Issued By:</span>
                  <span className="text-foreground font-medium">AlphaSoft360</span>
                </div>
                {!isExecutive && (
                  <div className="flex justify-between items-center text-muted">
                    <span>Valid Until:</span>
                    <span className="text-foreground font-medium">12 / 2026</span>
                  </div>
                )}
              </div>
            </div>

            {/* Card Footer */}
            <div className="bg-gradient-to-r from-accent-2/90 to-accent/90 py-2 text-center border-t border-accent/20">
              <span className="text-[11px] font-bold tracking-widest text-white uppercase">
                WWW.ALPHASOFT360.COM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Controls & Instructions */}
      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={toggleFlip}
          className="btn-secondary text-xs py-2 px-4 rounded-full flex items-center gap-2 hover:border-accent/50 transition-colors shadow-sm cursor-pointer"
        >
          <RotateCw className="h-3.5 w-3.5 text-accent-2" />
          <span>{isFlipped ? "Show Front Side" : "Flip 3D Card"}</span>
        </button>
        <span className="text-[11px] text-muted">Drag card to rotate in 3D</span>
      </div>
    </div>
  );
}
