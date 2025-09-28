import React, { useState, useRef } from "react";
import axios from "axios";

const AdminForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    section: "",
  });

  const [education, setEducation] = useState([
    { degree: "", institute: "", subject: "", duration: "" },
  ]);
  const [experience, setExperience] = useState([
    { title: "", organization: "", years: "" },
  ]);
  const [languages, setLanguages] = useState([""]);
  const [imageFile, setImageFile] = useState(null);
  const imageInputRef = useRef(null);

  // Generic array handlers
  const handleArrayChange = (setter, arr, index, field, value) => {
    const updated = [...arr];
    if (field) updated[index][field] = value;
    else updated[index] = value; // for languages
    setter(updated);
  };

  const addField = (setter, newField) => setter((prev) => [...prev, newField]);
  const removeField = (setter, arr, index) => {
    const updated = arr.filter((_, i) => i !== index);
    setter(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append basic form data
    Object.entries(formData).forEach(([k, v]) => data.append(k, v));

    if (imageFile) data.append("image", imageFile);
    data.append("education", JSON.stringify(education));
    data.append("experience", JSON.stringify(experience));
    data.append("languages", JSON.stringify(languages));

   try {
  await axios.post("https://my-backend.vercel.app/api/faculty", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  alert("Teacher added successfully!");

  // Reset form
  setFormData({ name: "", designation: "", email: "", section: "" });
  setEducation([{ degree: "", institute: "", subject: "", duration: "" }]);
  setExperience([{ title: "", organization: "", years: "" }]);
  setLanguages([""]);
  setImageFile(null);
  imageInputRef.current && (imageInputRef.current.value = "");
} catch (err) {
  console.error("Error creating teacher", err);
  alert("Failed to add teacher.");
}
  };
  return (
    <div className="container mt-5">
      <div
        className="card shadow-lg mx-auto border-0"
        style={{ maxWidth: "650px", borderRadius: "16px" }}
      >
        <div
          className="card-header text-white text-center"
          style={{ backgroundColor: "#1f668a", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}
        >
          <h3 className="mb-0">Admin Panel - Add New Teacher</h3>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            {/* Basic Info */}
            {["name", "designation", "email"].map((field) => (
              <div key={field} className="mb-3">
                <label className="form-label fw-bold">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  className="form-control rounded-3 shadow-sm"
                  placeholder={`Enter ${field}`}
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  required={field !== "email"}
                />
              </div>
            ))}

{/* Section Dropdown */}
<select
  name="section"
  className="form-select rounded-3 shadow-sm"
  value={formData.section}
  onChange={(e) =>
    setFormData({ ...formData, section: e.target.value })
  }
  required
>
  <option value="">-- Select Section --</option>
  <option value="pre-school">Pre-School</option>
  <option value="primary">Primary</option>
  <option value="secondary">Secondary</option>
</select>
   {/* Image */}
            <div className="mb-3">
              <label className="form-label fw-bold">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                className="form-control rounded-3 shadow-sm"
                ref={imageInputRef}
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </div>

            {/* Education */}
            <h5 className="fw-bold mt-4">Education</h5>
            {education.map((edu, i) => (
              <div key={i} className="mb-3 border p-3 rounded-3 shadow-sm bg-light">
                {["degree", "institute", "subject", "duration"].map((f) => (
                  <input
                    key={f}
                    type="text"
                    className="form-control mb-2 rounded-3 shadow-sm"
                    placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
                    value={edu[f]}
                    onChange={(e) =>
                      handleArrayChange(setEducation, education, i, f, e.target.value)
                    }
                  />
                ))}
                {education.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger btn-sm mt-2"
                    onClick={() => removeField(setEducation, education, i)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                addField(setEducation, {
                  degree: "",
                  institute: "",
                  subject: "",
                  duration: "",
                })
              }
              className="btn btn-outline-secondary mb-3"
            >
              ➕ Add More Education
            </button>

            {/* Experience */}
            <h5 className="fw-bold mt-4">Experience</h5>
            {experience.map((exp, i) => (
              <div key={i} className="mb-3 border p-3 rounded-3 shadow-sm bg-light">
                {["title", "organization", "years"].map((f) => (
                  <input
                    key={f}
                    type="text"
                    className="form-control mb-2 rounded-3 shadow-sm"
                    placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
                    value={exp[f]}
                    onChange={(e) =>
                      handleArrayChange(setExperience, experience, i, f, e.target.value)
                    }
                  />
                ))}
                {experience.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger btn-sm mt-2"
                    onClick={() => removeField(setExperience, experience, i)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                addField(setExperience, {
                  title: "",
                  organization: "",
                  years: "",
                })
              }
              className="btn btn-outline-secondary mb-3"
            >
              ➕ Add More Experience
            </button>

            {/* Languages */}
            <h5 className="fw-bold mt-4">Languages</h5>
            {languages.map((lang, i) => (
              <div key={i} className="mb-2 d-flex">
                <input
                  type="text"
                  className="form-control rounded-3 shadow-sm"
                  placeholder="Enter a language"
                  value={lang}
                  onChange={(e) =>
                    handleArrayChange(setLanguages, languages, i, null, e.target.value)
                  }
                />
                {languages.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => removeField(setLanguages, languages, i)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField(setLanguages, "")}
              className="btn btn-outline-secondary mb-3"
            >
              ➕ Add More Languages
            </button>

            {/* Submit */}
            <button
              type="submit"
              className="btn w-100 text-white"
              style={{ backgroundColor: "#1f668a" }}
            >
              ✅ Add Teacher
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminForm;
