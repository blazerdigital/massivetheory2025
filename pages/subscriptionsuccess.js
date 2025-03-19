import Link from 'next/link';
import '../styles/library.css'; // ✅ Import the global styles

export default function SubscriptionSuccess() {
  return (
    <div className="confirmcontainer">
      <h1>🎉 Subscription Confirmed!</h1>
      <p>You are now subscribed to Massive Theory updates.</p>
      <Link href="/" className="btn">Go to Homepage</Link>
    </div>
  );
}
