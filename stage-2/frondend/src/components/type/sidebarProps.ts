// src/types/SidebarRightItemProps.ts
import { ReactNode } from "react";

export interface SidebarRightItemProps {
  cover: ReactNode; 
  size?: string;
  left?: string;
  top?: string;
  customWidth?: string;
  customHeight?: string;
  customBackground?: string;
}
