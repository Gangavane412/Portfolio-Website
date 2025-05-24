import React from 'react'

function Education() {
  return (
  <section className="education" id="education">
  <h1 className="heading" style={{ color: "white" }}>
    <i className="fas fa-graduation-cap" /> My <span>Education</span>
  </h1>
  <p className="qoute" style={{ color: "white" }}>
    Education is not the learning of facts, but the training of the mind to
    think.
  </p>
  <div className="box-container">
    <div className="box">
      <div className="image">
        <img
          draggable="false"
          src="https://nacscs.ac.in/web-assets/img/slider1.jpg"
          alt=""
        />
      </div>
      <div className="content">
        <h3>Bachelor of Science in Computer Science</h3>
        <p>New Arts Commerce and Science College, Shevgaon</p>
        <h4>2022-2025 | CGPA – 9.36 | Pursuing</h4>
      </div>
    </div>
    <div className="box">
      <div className="image">
        <img
          draggable="false"
          src="https://i.ytimg.com/vi/IS0esAR26EQ/hqdefault.jpg"
          alt=""
        />
      </div>
      <div className="content">
        <h3>HSC Science</h3>
        <p>Aabasaheb Kakde vidaylay, Shevgaon</p>
        <h4>2020-2022 | 83% | Completed</h4>
      </div>
    </div>
    <div className="box">
      <div className="image">
        <img
          draggable="false"
          src="https://i.ytimg.com/vi/IS0esAR26EQ/hqdefault.jpg"
          alt=""
        />
      </div>
      <div className="content">
        <h3>SSC</h3>
        <p>Aabasaheb Kakde vidaylay, Shevgaon</p>
        <h4>2019-2020 | 78% | Completed</h4>
      </div>
    </div>
  </div>
</section>

  )
}

export default Education