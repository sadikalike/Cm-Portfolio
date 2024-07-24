import React from 'react'
import styles from "./Projects.module.css";
function Projects() {
  return (
      <section className={styles.container} id="#ബഹുമതികൾ">
            <h2 className={styles.title}>ബഹുമതികൾ</h2>
            <div className={styles.ap }>
                  <h3>താജുൽ ഉലമ</h3>
                  
                  <ul>
                        <li>"CMവലിയുള്ളാഹി.....മഹാനവർകൾ വല്ലാത്ത ആളാ. അവരെ ബർക്കത്ത് നമുക്ക് കിട്ടിയാൽ തന്നെ മതി വേറെ ആരതും വേണ്ട..!"</li>
                  </ul>
            </div>
            <div className={styles.shams}>
                  <h3>വൈലത്തൂർ തങ്ങൾ</h3>
                  
                  <ul>
                        <li>"രേഖപ്പെടുത്തപ്പെട്ട മഹാൻമാരുടെ ചരിത്രം പരിശോദിച്ചാൽ CM നോട് കടുക് മണിക്ക് പോലും തുല്യ പെടുന്ന ഒരാളെ നിങ്ങൾക്ക് കാണാൻ കഴിയില്ല...!</li>
                  </ul>
            </div>
            <div className={styles.thaj}>
                  <h3>എ പി ഉസ്താദ്</h3>
                  
                  <ul>
                        <li>"എന്റെ ശൈഖും എന്റെ മുറബ്ബിയും എന്നെ എപ്പോഴും ഉപദേശിക്കുകയും നിയന്ത്രിക്കുകയും ചെയ്തിട്ടുള്ള മഹാൻ.ഇന്നും നിയന്ത്രിച്ചു കൊണ്ടിരിക്കുന്നു..!"</li>
                  </ul>
            </div>
            {/* <div className={styles.vadagara}>
                  <h3>vadagara thangal</h3>
                  <p>Ap usthadinde kalam </p>
                  <ul>
                        <li>thattikalikkan nokkanda, ningal thattiyad kondo pugalthiyad kondo aviduthr degreekk koyappam verilla</li>
                  </ul>
            </div> */}
      </section>
  )
}

export default Projects
