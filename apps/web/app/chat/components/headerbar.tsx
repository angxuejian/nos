"use client";
interface Props {
    isOpen: boolean,
    onOpenChange: (open: boolean) => void;
}

export default function HeaderbarComponent({ isOpen, onOpenChange}: Props) {
    return (
        <header className="hidden max-sm:block h-[40px] w-full">
            <button onClick={() => onOpenChange(!isOpen)}>{ isOpen ? '关闭' : '打开'}</button>
        </header>
    )
}