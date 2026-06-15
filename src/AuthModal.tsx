export default function AuthModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <h2>Auth Modal</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}