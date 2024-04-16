export default function Educationalnfo({
  info,
  handleChange,
  removeEducation,
  addEducation,
}) {
  return (
    <div className="educationalInfoInput inputSec">
      <h2>Education</h2>
      {info.map((edu, index) => (
        <div key={edu.id}>
          <input
            type="text"
            placeholder="Institution"
            name="institution"
            value={edu.institution}
            onChange={(e) => handleChange(index, e)}
          />

          <input
            type="text"
            placeholder="Degree"
            name="degree"
            value={edu.degree}
            onChange={(e) => handleChange(index, e)}
          />

          <input
            type="text"
            placeholder="Graduation Year"
            name="graduationYear"
            value={edu.graduationYear}
            onChange={(e) => handleChange(index, e)}
          />

          {info.length !== 1 && (
            <button onClick={() => removeEducation(index)}>Remove</button>
          )}
        </div>
      ))}
      <button className="addBtn" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
}
