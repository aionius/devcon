import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile } from "../../actions/profileActions";

function CreateProfile(props) {
  const [displaySocialInputs, setDisplaySocialInputs] = useState(false);
  const [handle, setHandle] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [skills, setSkills] = useState("");
  const [githubusername, setGithubusername] = useState("");
  const [bio, setBio] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [youtube, setYoutube] = useState("");
  const [instagram, setInstagram] = useState("");
  const [errors, setErrors] = useState({});

  function onChangeEvent(event) {
    const formName = event.target.name;
    switch (formName) {
      case "handle":
        setHandle(event.target.value);
        break;
      case "company":
        setCompany(event.target.value);
        break;
      case "website":
        setWebsite(event.target.value);
        break;
      case "location":
        setLocation(event.target.value);
        break;
      case "status":
        setStatus(event.target.value);
        break;
      case "skills":
        setSkills(event.target.value);
        break;
      case "githubusername":
        setGithubusername(event.target.value);
        break;
      case "bio":
        setBio(event.target.value);
        break;
      case "twitter":
        setTwitter(event.target.value);
        break;
      case "facebook":
        setFacebook(event.target.value);
        break;
      case "linkedin":
        setLinkedin(event.target.value);
        break;
      case "youtube":
        setYoutube(event.target.value);
        break;
      case "instagram":
        setInstagram(event.target.value);
        break;
      default:
        break;
    }
  }

  function onSubmit(event) {
    event.preventDefault();

    const profileData = {
      handle,
      company,
      website,
      location,
      status,
      skills,
      githubusername,
      bio,
      twitter,
      facebook,
      linkedin,
      youtube,
      instagram
    };

    props.createProfile(profileData, props.history);
  }

  useEffect(() => {
    if (props.errors) {
      setErrors(props.errors);
    }
  });

  const options = [
    {
      label: "* Select Professional Status",
      value: 0
    },
    {
      label: "Developer",
      value: "Developer"
    },
    {
      label: "Junior Developer",
      value: "Junior Developer"
    },
    {
      label: "Senior Developer",
      value: "Senior Developer"
    },
    {
      label: "Manager",
      value: "Manager"
    },
    {
      label: "Student or Learning",
      value: "Student or Learning"
    },
    {
      label: "Instructor or Teacher",
      value: "Instructor or Teacher"
    },
    {
      label: "Intern",
      value: "Intern"
    },
    {
      label: "Other",
      value: "Other"
    }
  ];

  let socialInputs;
  if (displaySocialInputs) {
    socialInputs = (
      <div>
        <InputGroup
          placeholder="Twitter Profile URL"
          name="twitter"
          icon="fab fa-twitter"
          value={twitter}
          onChange={onChangeEvent}
          error={errors.twitter}
        />
        <InputGroup
          placeholder="Facebook Page URL"
          name="facebook"
          icon="fab fa-facebook"
          value={facebook}
          onChange={onChangeEvent}
          error={errors.facebook}
        />
        <InputGroup
          placeholder="Linkedin Profile URL"
          name="linkedin"
          icon="fab fa-linkedin"
          value={linkedin}
          onChange={onChangeEvent}
          error={errors.linkedin}
        />
        <InputGroup
          placeholder="Youtube Channel URL"
          name="youtube"
          icon="fab fa-youtube"
          value={youtube}
          onChange={onChangeEvent}
          error={errors.youtube}
        />
        <InputGroup
          placeholder="Instagram Page URL"
          name="instagram"
          icon="fab fa-instagram"
          value={instagram}
          onChange={onChangeEvent}
          error={errors.instagram}
        />
      </div>
    );
  }

  return (
    <div className="create-profile">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Create Your Profile</h1>
            <p className="lead text-center">
              Let's get some information to make your profile stand out
            </p>
            <small className="d-block pb-3">* = required fields</small>
            <form onSubmit={onSubmit}>
              <TextFieldGroup
                placeholder="* Profile Handle"
                name="handle"
                value={handle}
                onChange={onChangeEvent}
                error={errors.handle}
                info="A unique handle for your profile URL. Your full name, company name, nickname."
              />
              <SelectListGroup
                placeholder="Status"
                name="status"
                value={status}
                onChange={onChangeEvent}
                options={options}
                error={errors.status}
                info="Give us an idea of where you are at in your career."
              />
              <TextFieldGroup
                placeholder="Company"
                name="company"
                value={company}
                onChange={onChangeEvent}
                error={errors.company}
                info="Could be your own company or one you work for."
              />
              <TextFieldGroup
                placeholder="Website"
                name="website"
                value={website}
                onChange={onChangeEvent}
                error={errors.website}
                info="Could be your own or a company website."
              />
              <TextFieldGroup
                placeholder="Location"
                name="location"
                value={location}
                onChange={onChangeEvent}
                error={errors.location}
                info="City & state suggested (eg. Boston, MA)."
              />
              <TextFieldGroup
                placeholder="Skills"
                name="skills"
                value={skills}
                onChange={onChangeEvent}
                error={errors.skills}
                info="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)."
              />
              <TextFieldGroup
                placeholder="Github Username"
                name="githubusername"
                value={githubusername}
                onChange={onChangeEvent}
                error={errors.githubusername}
                info="If you want your latest repos and a Github link, include your username."
              />
              <TextAreaFieldGroup
                placeholder="A short bio of yourself"
                name="bio"
                value={bio}
                onChange={onChangeEvent}
                error={errors.bio}
                info="Tell us a little about yourself."
              />
              <div className="mb-3">
                <button
                  type="button"
                  onClick={() => {
                    setDisplaySocialInputs(!displaySocialInputs);
                  }}
                  className="btn btn-light"
                >
                  Add Social Network Links
                </button>
                <span className="text-muted"> Optional</span>
              </div>
              {socialInputs}
              <input
                type="submit"
                value="Submit"
                className="btn btn-info btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(CreateProfile);
