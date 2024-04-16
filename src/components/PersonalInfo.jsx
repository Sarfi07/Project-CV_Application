export default function PersonalInfo({ info, handleChange }) {
  return (
    <div className="personalInfoInput inputSec">
      <h2>Personal Information</h2>
      <input
        type="text"
        value={info.name}
        onChange={handleChange}
        name="name"
        placeholder="Name"
      />

      <input
        type="email"
        value={info.email}
        onChange={handleChange}
        name="email"
        placeholder="Email"
      />

      <input
        type="text"
        value={info.address}
        onChange={handleChange}
        name="address"
        placeholder="Address"
      />
      <input
        type="tel"
        value={info.phone}
        onChange={handleChange}
        name="phone"
        placeholder="Phone Number"
      />
    </div>
  );
}
