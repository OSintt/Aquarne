function ServerCard({
  title,
  description,
  ip,
}: {
  title: String;
  description: String;
  ip: String;
}) {
  return (
    <div className="server-card-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="server-ip">
        {ip}
      </p>
    </div>
  );
}

export default ServerCard;
