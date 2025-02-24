import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Navbar from "../Navbar/navabar";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    email: "umerkhattax@gmail.com",
    password: "........",
    firstName: "Umar",
    lastName: "Faiz",
    billingAddress: {
      address: "",
      city: "",
      country: "",
      state: "",
      postalCode: "",
      company: "",
      taxID: "",
    },
    phone: "",
    timezone: "America/Adak",
    enable2FA: true,
    emailUpdates: true,
  });

  const [countries, setCountries] = useState<
    { value: string; label: string }[]
  >([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((res) => res.json())
      .then((data) => {
        const countryList = data.data.map((country) => ({
          value: country.country, // Country Name
          label: country.country,
        }));
        setCountries(countryList);
      })
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes("billingAddress")) {
      const field = name.split(".")[1];
      setProfile((prevState) => ({
        ...prevState,
        billingAddress: {
          ...prevState.billingAddress,
          [field]: value,
        },
      }));
    } else {
      setProfile((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.put("/api/profile", profile);
      console.log("Profile updated:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <Navbar />

      <ProfileContainer>
        <h1
          style={{
            margin: "0px 0px 25px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Edit your details
        </h1>
        <ProfileForm onSubmit={handleSubmit}>
          <FormSection>
            <FormGroup>
              <label>Email</label>
              <Input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Password</label>
              <PasswordContainer>
                <Input
                  type="password"
                  name="password"
                  value={profile.password}
                  onChange={handleChange}
                />
                <Enable2FAButton type="button">
                  {profile.enable2FA ? "Disable 2FA" : "Enable 2FA"}
                </Enable2FAButton>
              </PasswordContainer>
            </FormGroup>
            <Row>
              <FormGroup>
                <label>First Name</label>
                <Input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Last Name</label>
                <Input
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                />
              </FormGroup>
            </Row>
            <FormGroup>
              <label>Profile Photo</label>
              <PhotoUploadContainer>
                <UploadButton type="button">Upload photo</UploadButton>
                <DeleteButton type="button">Delete photo</DeleteButton>
              </PhotoUploadContainer>
            </FormGroup>
          </FormSection>

          <FormSection>
            <h2
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Billing Address
            </h2>
            <Row>
              <FormGroup style={{ flex: 2 }}>
                {" "}
                <label>Address</label>
                <Input
                  type="text"
                  name="billingAddress.address"
                  value={profile.billingAddress.address}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                />
              </FormGroup>
              <FormGroup style={{ flex: 1 }}>
                {" "}
                <label>City</label>
                <Input
                  type="text"
                  name="billingAddress.city"
                  value={profile.billingAddress.city}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <label>Country</label>
                <Select
                  name="billingAddress.country"
                  value={profile.billingAddress.country}
                  onChange={handleChange}
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <label>Postal / Zip Code</label>
                <Input
                  type="text"
                  name="billingAddress.postalCode"
                  value={profile.billingAddress.postalCode}
                  onChange={handleChange}
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <label>State / Province / Region</label>
                <Input
                  type="text"
                  name="billingAddress.state"
                  value={profile.billingAddress.state}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Company</label>
                <Input
                  type="text"
                  name="billingAddress.company"
                  value={profile.billingAddress.company}
                  onChange={handleChange}
                />
              </FormGroup>
            </Row>
            <FormGroup>
              <label>Tax ID</label>
              <Input
                type="text"
                name="billingAddress.taxID"
                value={profile.billingAddress.taxID}
                onChange={handleChange}
              />
            </FormGroup>
          </FormSection>

          <FormSection>
            <h2>Contact Information</h2>
            <Row>
              <FormGroup>
                <label>Phone</label>
                <Input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Timezone</label>
                <Select
                  name="timezone"
                  value={profile.timezone}
                  onChange={handleChange}
                >
                  <option value="America/Adak">America/Adak</option>
                  {/* Add more timezone options as needed */}
                </Select>
              </FormGroup>
            </Row>
          </FormSection>

          {/* <FormSection>
          <h2>Notifications</h2>
          <FormGroup>
            <CheckboxLabel>
              <input
                type="checkbox"
                name="emailUpdates"
                checked={profile.emailUpdates}
                onChange={handleChange}
              />
              Email me when my orders or tickets are updated
            </CheckboxLabel>
          </FormGroup>
        </FormSection> */}

          <SaveChangesButton type="submit">Save Changes</SaveChangesButton>
        </ProfileForm>
      </ProfileContainer>
    </>
  );
};

export default ProfilePage;

// Styled Components
const ProfileContainer = styled.div`
  padding: 20px;
  color: black;
  margin: 0 auto;
  border-radius: 8px;
`;

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 20px;
`;

const FormSection = styled.div`
  padding: 20px;
  border-radius: 8px;
`;

const PasswordContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  flex: 1;
  label {
    margin-bottom: 8px;
    display: block;
    color: #00254d;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #c9ced6;
  border-radius: 4px;
  color: #00254d;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #c9ced6;
  border-radius: 4px;
  font-size: 16px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;

const Enable2FAButton = styled.button`
  color: #42526e;
  background: #f3f3f7;
  border: 1px solid #f3f3f7;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
`;

const SaveChangesButton = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;
  font-size: 16px;

  &:hover {
    background: #218838;
  }
`;

const PhotoUploadContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const UploadButton = styled.button`
  color: #42526e;
  background: #f3f3f7;
  border: 1px solid #f3f3f7;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;

const DeleteButton = styled.button`
  color: #42526e;
  background: #f3f3f7;
  border: 1px solid #f3f3f7;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;
