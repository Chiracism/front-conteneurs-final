import React from 'react';
import './Masterfile.css';

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
        <div className="print-source" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            className="print-source"
            src="/static/logo_lmc.JPG"
            alt="Logo"
            style={{ width: 150, height: 150 }}
          />
          <img
            className="print-source"
            src="/static/logo_lmc.JPG"
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
          <div
            className="print-source"
            style={{ textAlign: 'center', color: 'blue', flexGrow: 0.2 }}
          >
            <p style={{ fontWeight: 700, fontSize: '22px' }}>République Démocratique du Congo</p>
            <p style={{ fontWeight: 700, fontSize: '22px' }}>LIGNES MARITIMES CONGOLAISES, SA</p>
            <p style={{ fontWeight: 600, fontSize: '22px' }}>Armement National</p>
            <hr style={{ opacity: 1, color: 'blue', backgroundColor: 'blue', height: '3px' }} />
          </div>
        </div>
        <h3 className="print-source" style={{ textAlign: 'center' }}>
          FICHE CONTENEUR
        </h3>
        <p className="print-source" style={{ textAlign: 'right', margin: '2rem 1rem 3rem 0' }}>
          <strong> Client </strong> : <span>{client}</span>
        </p>
        {/* <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 1rem 4.5rem' }}>
          <span>{client.address}</span>
        </p> */}
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          <strong>N° Conteneur</strong> : <span>{number}</span>
        </p>
        <br />
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* '0rem 1rem 0rem 6.8rem' */}
          <strong>Type Conteneur</strong> : <span>{typeconteneurid}</span>
        </p>
        <br />
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 2rem 1rem 3rem 0 */}
          <strong>Taille Conteneur</strong> : <span>{tailleconteneurid}</span>
        </p>
        <br />
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>Constructeur</strong> : <span>{constructeur}</span>
        </p>
        <br />
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>Date Fabrication</strong> : <span>{datefabrication}</span>
        </p>
        <br />
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>Date Entrée Service</strong> : <span>{dateentrerservice}</span>
        </p>
        <br />
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>Date Inspection</strong> : <span>{datederniereinspection}</span>
        </p>
        <br />
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>Dernier Constat</strong> : <span>{dernierconstat}</span>
        </p>
        {/* <div
          className="print-source"
          style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', width: '100%' }}
        >
          <table className="print-source" style={{ width: '100%' }}>
            <thead>
              <th>N° Conteneur</th>
              <th>Type/Conteneur</th>
              <th>Taille/Conteneur</th>
              <th>Contructeur</th>
            </thead>
            <tbody style={{ width: '100%' }}>
              {rows.map((value, key) => {
                const { number, typeconteneurid, tailleconteneurid, constructeur } = value;
                return (
                  <tr key={key} style={{ textAlign: 'center' }}>
                    <td>{number}</td>
                    <td>{typeconteneurid}</td>
                    <td>{tailleconteneurid}</td>
                    <td>{constructeur}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}
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
          </p>
        </div>
      </div>
    );
  }
}

export default ComponentToPrint;
