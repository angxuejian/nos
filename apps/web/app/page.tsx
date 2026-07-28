
import ChatComponent from "@/components/client/chat";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      A personal AI agent. 

      <ChatComponent />
    </div>
  );
}
