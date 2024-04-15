export default function PracticalEx({ info, handleChange, removeEx }) {
  return (
    <>
      <h2>Practical Experience</h2>
      {info.map((exp, index) => (
        <div key={exp.id}>
          <input
            type="text"
            placeholder="companyName"
            name="companyName"
            value={exp.companyName}
            onChange={(e) => handleChange(index, e)}
          />

          <input
            type="text"
            placeholder="position"
            name="position"
            value={exp.position}
            onChange={(e) => handleChange(index, e)}
          />

          <input
            type="text"
            placeholder="Worked From"
            name="from"
            value={exp.from}
            onChange={(e) => handleChange(index, e)}
          />

          <input
            type="text"
            placeholder="Worked Until"
            name="until"
            value={exp.until}
            onChange={(e) => handleChange(index, e)}
          />

          {info.length !== 1 && (
            <button onClick={() => removeEx(index)}>Remove</button>
          )}
        </div>
      ))}
    </>
  );
}
