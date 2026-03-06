"use client";

import React from "react";
import FloatingObjects, { FloatingObjectsPresets } from "./FloatingObjects";

/**
 * Test scene component for development and testing
 */
export default function TestScene() {
  return (
    <>
      <FloatingObjects {...FloatingObjectsPresets.hero} />
    </>
  );
}