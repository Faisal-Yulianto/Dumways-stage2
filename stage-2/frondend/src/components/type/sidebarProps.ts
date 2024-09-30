// src/types/SidebarRightItemProps.ts
import { ReactNode } from "react";

export interface SidebarRightItemProps {
  cover: ReactNode; // Menggunakan ReactNode untuk mendefinisikan elemen JSX
  size?: string;
  left?: string;
  top?: string;
  customWidth?: string;
  customHeight?: string;
  customBackground?: string;
}
