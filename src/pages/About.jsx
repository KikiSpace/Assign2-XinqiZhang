const About = () => {
  return (
       <section className='max-container'>
      <h1 className='head-text'>
        About our DataSet
    
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Our dataset comes from Santa Clara University's Waste Characterization data. It includes the following fields: Year, Date, Building, Stream (the waste label), Volume (as the unit), Weight (in pounds), and Notes (detailing the waste content).
          <br/>It contains 7 fields and 521 rows. The data spans from 2015 to 2023, but it is not continuous and contains null values. The results might contain bias due to these limitations.
        </p>
      </div>


      <hr className='border-slate-200' />
    </section>
  )
}

export default About
