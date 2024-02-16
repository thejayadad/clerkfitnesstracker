'use client'
// 'use client'
import React, { useState } from 'react';

const UpdateForm = ({ profile, onUpdate }) => {
  const [formData, setFormData] = useState({
    username: profile.username,
    age: profile.age || '',
    weight: profile.weight || '',
    height: profile.height || '',
    gender: profile.gender || '',
    goal: profile.goal || '',
    activityLevel: profile.activityLevel || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onUpdate(formData);
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Failed to update profile: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div>
          <label>Weight:</label>
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
        </div>
        <div>
          <label>Height:</label>
          <input type="number" name="height" value={formData.height} onChange={handleChange} />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Goal:</label>
          <select name="goal" value={formData.goal} onChange={handleChange}>
            <option value="">Select Goal</option>
            <option value="lose">Lose Weight</option>
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Gain Weight</option>
          </select>
        </div>
        <div>
          <label>Activity Level:</label>
          <select name="activityLevel" value={formData.activityLevel} onChange={handleChange}>
            <option value="">Select Activity Level</option>
            <option value="sedentary">Sedentary</option>
            <option value="lightly active">Lightly Active</option>
            <option value="moderately active">Moderately Active</option>
            <option value="very active">Very Active</option>
            <option value="extra active">Extra Active</option>
          </select>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
