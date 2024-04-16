import { useState } from 'react';
import './App.css';
import './styles/preview.css';
import './styles/form.css';
import PersonalInfo from './components/PersonalInfo';
import Educationalnfo from './components/EducationalInfo';
import PracticalEx from './components/PracticalEx';

import { format } from 'date-fns';

export default function App() {
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

    if (name === 'from' || name == 'until') {
      const date = formatDate(new Date(value));
      updatedEducation[index][name] = date;
    } else {
      updatedEducation[index][name] = value;
    }
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

  function formatDate(date) {
    return format(date, 'MM, yyyy');
  }

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
          addEducation={addEducation}
        />

        <PracticalEx
          info={practicalEx}
          handleChange={handPracticalInfoChange}
          removeEx={removeEx}
          addPracticalEx={addPracticalEx}
        />
      </div>
      <div className="preview">
        <div className="personalInfoPreview">
          <h1 id="name">{personalInfo.name}</h1>
          {personalInfo.email && (
            <p>
              <span>Email:</span> {personalInfo.email}
            </p>
          )}
          {personalInfo.address && (
            <p>
              <span>Address:</span> {personalInfo.address}
            </p>
          )}
          {personalInfo.phone && (
            <p>
              <span>Phone:</span> {personalInfo.phone}
            </p>
          )}
        </div>
        <hr />
        <div className="educationalInfoPreview">
          {educationalInfo[0].institution && (
            <h3>
              <u>Eduational Experience</u>
            </h3>
          )}
          {educationalInfo[0].institution &&
            educationalInfo.map((edu) => (
              <div className="eduP" key={edu.institution}>
                <p>
                  <span>Institution: </span>
                  {edu.institution}
                </p>
                <p>
                  <span>Degree: </span>
                  {edu.degree}
                </p>
                <p className="gradYearP">{edu.graduationYear}</p>
              </div>
            ))}
        </div>

        <div className="practicalExpP">
          {practicalEx[0].companyName && (
            <>
              <hr />
              <h3>
                <u>Practical Experience</u>
              </h3>
              {practicalEx.map((exp) => (
                <div className="expP" key={exp.id}>
                  <p>
                    <span>Company: </span>
                    {exp.companyName}
                  </p>
                  <p>
                    <span>Position: </span>
                    {exp.position}
                  </p>

                  <p className="expDuration">
                    {exp.from}: {exp.until}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
