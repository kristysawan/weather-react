// shown when the request fails, App decides which message to send
export default function ErrorMessage({ message }) {
  return <p className="error">{message}</p>;
}