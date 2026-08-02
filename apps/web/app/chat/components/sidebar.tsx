"use client";

interface Props {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Sidebar({ isOpen, onOpenChange }: Props) {
  return (
    <>
      {isOpen && (
        <div
          className="max-sm:fixed max-sm:inset-0 max-sm:bg-black/40 max-sm:z-10
            sm:hidden"
          onClick={() => onOpenChange(!isOpen)}
        >
          关闭
        </div>
      )}

      <aside
        className={`transition-all duration-300 ease-in-out overflow-hidden w-10 lg:w-[200px] md:w-10 max-sm:w-0 h-full bg-[blue] border-r border-gray-200 dark:border-gray-700 absolute left-0 top-0 ${isOpen ? "max-sm:w-[200px]" : "max-sm:w-0"} max-sm:z-20`}
      >
        side bar
        <button onClick={() => onOpenChange(!isOpen)}>关闭</button>
      </aside>
    </>
  );
}
