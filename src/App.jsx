import { useState } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Educationalnfo from './components/EducationalInfo';
import PracticalEx from './components/PracticalEx';
// import { format } from 'date-fns';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  // todo Educational Experience, practical Experience, edit feature,
  const [educationalInfo, setEducationalInfo] = useState([
    {
      id: 1,
      institution: '',
      degree: '',
      graduationYear: '',
    },
  ]);

  const [practicalEx, setPracticalEx] = useState([
    {
      id: 1,
      companyName: '',
      position: '',
      from: '',
      until: '',
      responsibilities: '',
    },
  ]);

  function handPracticalInfoChange(index, e) {
    const { name, value } = e.target;
    const upatedPracticalEx = [...practicalEx];
    upatedPracticalEx[index][name] = value;

    setPracticalEx(upatedPracticalEx);
  }

  function addPracticalEx() {
    setPracticalEx([
      ...practicalEx,
      {
        id: practicalEx.length + 1,
        companyName: '',
        position: '',
        from: '',
        until: '',
        responsibilities: '',
      },
    ]);
  }

  function removeEx(index) {
    const updatedPracticalEx = [...practicalEx];
    updatedPracticalEx.splice(index, 1);

    const updatedPracticalExWithIds = updatedPracticalEx.map((exp, idx) => {
      return {
        ...exp,
        id: idx + 1,
      };
    });
    setPracticalEx(updatedPracticalExWithIds);
  }

  function handlePersonalInfoChange(e) {
    const { name, value } = e.target;

    setPersonalInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleEducationalInfoChange(index, e) {
    const { name, value } = e.target;
    const updatedEducation = [...educationalInfo];
    updatedEducation[index][name] = value;
    setEducationalInfo(updatedEducation);
  }

  function addEducation() {
    setEducationalInfo([
      ...educationalInfo,
      {
        id: educationalInfo.length + 1,
        institution: '',
        degree: '',
        graduationYear: '',
      },
    ]);
  }

  function removeEducation(index) {
    const updatedEducation = [...educationalInfo];
    updatedEducation.splice(index, 1);
    // regenerateIds
    const updatedEducationWithIDs = updatedEducation.map((edu, idx) => {
      return {
        ...edu,
        id: idx + 1,
      };
    });
    setEducationalInfo(updatedEducationWithIDs);
  }

  // function formatDate(date) {
  //   return format(date, 'MM, yyyy');
  // }

  return (
    <>
      <div className="form">
        <PersonalInfo
          info={personalInfo}
          handleChange={handlePersonalInfoChange}
        />

        <Educationalnfo
          info={educationalInfo}
          handleChange={handleEducationalInfoChange}
          removeEducation={removeEducation}
        />
        <button onClick={addEducation}>Add Education</button>

        <PracticalEx
          info={practicalEx}
          handleChange={handPracticalInfoChange}
          removeEx={removeEx}
        />
        <button onClick={addPracticalEx}>Add Practical Experience</button>
      </div>
      <div className="preview">
        <div className="personalInfoPreview">
          <h1>{personalInfo.name}</h1>
          {personalInfo.email && <h3>Email: {personalInfo.email}</h3>}
          {personalInfo.address && <p>Address: {personalInfo.address}</p>}
          {personalInfo.phone && <p>Phone: {personalInfo.phone}</p>}
        </div>

        <div className="educationalInfoPreview">
          {educationalInfo[0].institution &&
            educationalInfo.map((edu) => (
              <div key={edu.institution}>
                <p>Institution: {edu.institution}</p>
                <p>Degree: {edu.degree}</p>
                <p>Graduation Year: {edu.graduationYear}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
