import React from 'react';
import './Historic.css';

class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toDateString()
    };
  }

  render() {
    const {
      rows,
      client,
      number,
      typeconteneurid,
      tailleconteneurid,
      constructeur,
      datefabrication,
      dateentrerservice,
      datederniereinspection,
      dernierconstat
    } = this.props;
    const { date } = this.state;

    return (
      <div>
        <div
          className="print-source"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'center'
          }}
        >
          <img
            className="print-source"
            src="/static/DIRPROKC.png"
            alt="Logo"
            justifyContent="center"
            position="center"
            alignItems="center"
            style={{ width: 350, height: 150, justifyContent: 'center', position: 'center' }}
          />
          <img
            className="print-source"
            src="/static/filigrane.png"
            alt="Logo"
            style={{
              position: 'absolute',
              zIndex: -1,
              opacity: 0.1,
              left: 75,
              top: 250,
              width: 600,
              height: 600
            }}
          />
          {/* <div
            className="print-source"
            style={{ textAlign: 'center', color: 'blue', flexGrow: 0.2 }}
          >
            <p style={{ fontWeight: 700, fontSize: '22px' }}>République Démocratique du Congo</p>
            <p style={{ fontWeight: 700, fontSize: '22px' }}>LIGNES MARITIMES CONGOLAISES, SA</p>
            <p style={{ fontWeight: 600, fontSize: '22px' }}>Armement National</p>
            <hr style={{ opacity: 1, color: 'blue', backgroundColor: 'blue', height: '3px' }} />
          </div> */}
        </div>
        <br />
        <br />
        <h3 className="print-source" style={{ textAlign: 'center' }}>
          HISTORIQUE DES MOUVEMENTS
        </h3>
        <div
          className="print-source"
          style={{
            display: 'block',
            justifyContent: 'center',
            marginTop: '2rem',
            marginBottom: '2rem',
            width: '100%'
          }}
        >
          <table className="print-source" style={{ width: '100%', marginBottom: '2rem' }}>
            <thead>
              <th>N° Conteneur</th>
              <th>Type/Conteneur</th>
              <th>Taille/Conteneur</th>
              <th>Contructeur</th>
              <th>Site</th>
              <th>Sous-Site</th>
              <th>Date Mouvement</th>
              <th>Navire</th>
              <th>Date Arrivée</th>
              <th>Port</th>
              <th>Observation</th>
              <th>Inséré par</th>
              <th>Date</th>
            </thead>
            <tbody style={{ width: '100%' }}>
              {rows.map((value, key) => {
                const { number, typeconteneur, tailleconteneurid, constructeur } = value;
                return (
                  <tr key={key} style={{ textAlign: 'center' }}>
                    <td>{number}</td>
                    <td>{typeconteneur}</td>
                    <td>{tailleconteneurid}</td>
                    <td>{constructeur}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* <div
          className="print-source"
          style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', width: '100%' }}
        >
          <table className="print-source" style={{ width: '100%' }}>
            <thead>
              <th>Date Fabrication</th>
              <th>Date Entrer en Service</th>
              <th>Date Inspection</th>
              <th>Constat</th>
            </thead>
            <tbody style={{ width: '100%' }}>
              {rows.map((value, key) => {
                const { datefabrication, dateentrerservice, datederniereinspection, constat } =
                  value;
                return (
                  <tr key={key} style={{ textAlign: 'center' }}>
                    <td>{datefabrication}</td>
                    <td>{dateentrerservice}</td>
                    <td>{datederniereinspection}</td>
                    <td>{constat}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}
        <div
          className="print-source"
          style={{
            position: 'absolute',
            bottom: '15%',
            right: 0,
            textAlign: 'right',
            margin: '3rem 1rem 3rem 0'
          }}
        >
          {/* <p>
            <strong>TVA</strong>
          </p> */}
          {/* <p>
            <strong>Montant Net</strong> : {total} FC
          </p> */}
          <p>
            <strong> Date </strong> : {date}
          </p>
        </div>
        <div
          className="print-source"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 60,
            textAlign: 'center',
            margin: '1rem 1',
            fontSize: 10
          }}
        >
          <img className="print-source" src="/static/Basdepage.JPG" alt="Logo" />
        {/* <div
          className="print-source"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 150,
            textAlign: 'center',
            margin: '3rem 0',
            fontSize: 10
          }}
        >
          {' '}
          <hr style={{ opacity: 1 }} />
          <p style={{ color: 'blue' }}>
            Société Anonyme Unipersonnelle avec Conseil d'Administration
          </p>
          <p style={{ color: 'blue' }}>au Capital de 16.474.900.000 CDF</p>
          <p>N°RCCM CD/RCCM/14-B-3622 - ID.NAT. : 01-715-A06030E - N°IMPOT : A0700620H</p>
          <p>
            Siège Social : Immeuble LMC - AMICONGO, 6ème étage, Avenue des Aviateurs, n°13 Place de
            la Poste,
          </p>
          <p>
            Commune de la Gombe, Courrier : <a href="mailto:info@lmc.cd">info@lmc.cd</a> Site web :{' '}
            <a href="www.lmc.cd">www.lmc.cd</a>
          </p> */}
        </div>
      </div>
    );
  }
}

export default ComponentToPrint;
