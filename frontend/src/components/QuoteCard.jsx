function QuoteCard({ quote, author }) {
  return (
    <div className="quote-card card">
      <p>“{quote}”</p>
      <span>— {author}</span>
    </div>
  );
}

export default QuoteCard;