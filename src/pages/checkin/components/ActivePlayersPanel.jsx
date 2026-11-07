/**
 * Shown in place of the check-in list when a tournament has registration
 * turned off ("No registration" in Match Play): lists the tournament's
 * active players instead of RSVPs.
 */
export default function ActivePlayersPanel({ players, maxRows, containerRef, innerRef }) {
  return (
    <>
      <div className="checkin-summary players-summary">
        <div className="checkin-big">{players.length}</div>
        <div className="checkin-small">Active {players.length === 1 ? "Player" : "Players"}</div>
      </div>

      <div className="checkin-scroll-viewport" ref={containerRef}>
        <div className="series-standings-inner" ref={innerRef}>
          {players.slice(0, maxRows).map((player, i) => (
            <div key={player._id ?? `${player._name}-${i}`} className="checkin-row active-player">
              <div className="checkmark">●</div>
              <div className="checkin-name">{player._name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
