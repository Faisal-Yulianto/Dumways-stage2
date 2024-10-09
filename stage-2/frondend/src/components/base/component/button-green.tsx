import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ButtonGreen({ children, ...props }: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: "#04A51E",
        padding: "3",
        gap: "10px",
        color: "white",
        fontSize: "20px",
        width: "300px",
        fontWeight: '500',
        height: '52px',
        borderRadius: "30px",
        border: "none",
      }}
      {...props}
    >
      {children}
    </button>
  );
}