import Link from 'next/link';
import '../styles/library.css'; // ✅ Import the global styles

export default function AlreadySubscribed() {
  return (
    <div className="confirmcontainer">
      <h1>You're Already Subscribed</h1>
      <p>It looks like you've already confirmed your subscription.</p>
      <Link href="/" className="btn">Go to Homepage</Link>
    </div>
  );
}
