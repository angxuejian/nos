
export default function UserInfo({ name }: { name: string }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Welcome, {name} 👋</h2>
    </div>
  );
}