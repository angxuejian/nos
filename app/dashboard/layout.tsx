import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex  flex-col">
      <h1 style={{ textAlign: "center" }}>dashboard layout</h1>
      <div className="flex w-full h-full flex-1">
        <aside style={{ borderRight: "1px solid red", padding: "0 10px"}}>
          <p>menu</p>

          <ul>
            <li>Home</li>
          </ul>
        </aside>

        <main className="flex-1 px-3">{children}</main>
      </div>
    </div>
  );
}
