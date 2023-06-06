import Bootcampcards from "./Bootcampcards"

function Bootcampsection() {
  return (
    <div className="bootcamps-section">
        <h2 className="bootcamp-header">أحدث المعسكرات والبرامج</h2>
        <div className="card-container">
            <Bootcampcards bootcampName="البنية المؤسسية بمنهجية وإطار TOGAF" city="الرياض" time="أسبوعان" date="11-06-2023" ifClosed="true"/>
            <Bootcampcards bootcampName="طويق للناشئين (عن بعد)" city="عن بعد" time="4 أسابيع" date="11-06-2023"/>
            <Bootcampcards bootcampName="أمن المعلومات Security+" city="الرياض" time="أسبوع" date="11-06-2023"/>
        </div>
        <button className="bootcamp-btn">المزيد من المعسكرات و البرامج</button>
    </div>
  )
}

export default Bootcampsection