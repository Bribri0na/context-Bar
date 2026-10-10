"use client";

import { useRouter } from "next/navigation";

type BackButtonProps = {
  label?: string;
};

export default function BackButton({ label = "Back" }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="w-fit cursor-pointer text-neon-cyan hover:underline"
    >
      ← {label}
    </button>
  );
}
