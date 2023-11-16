import React from 'react';
import './Mouvement.css';

class ComponentToPrintMouv extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toDateString()
    };
  }

  render() {
    const {
      rows,
      number,
      taille,
      type,
      bl,
      voyage,
      navire,
      eta,
      contenu,
      poids,
      client,
      numeromemo,
      agence,
      caution,
      destination,
      dates,
      total
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
            <p style={{ fontWeight: 700, fontSize: '22px' }}>Republique Démocratique du Congo</p>
            <p style={{ fontWeight: 700, fontSize: '22px' }}>LIGNES MARITIMES CONGOLAISES, SA</p>
            <p style={{ fontWeight: 600, fontSize: '22px' }}>Armement National</p>
            <hr style={{ opacity: 1, color: 'blue', backgroundColor: 'blue', height: '3px' }} />
          </div>
        </div>
        <br />
        <h3 className="print-source" style={{ textAlign: 'center' }}>
          FICHE MOUVEMENT DES CONTENEURS
        </h3>
        <br />
        <p className="print-source" style={{ textAlign: 'right', margin: '2rem 1rem 3rem 0' }}>
          <strong> Client </strong> : <span>{client}</span>
        </p>
        {/* <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 1rem 4.5rem' }}>
          <span>{client.address}</span>
        </p> */}
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          <strong>N° Conteneur</strong> : <span>{number}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* '0rem 1rem 0rem 6.8rem' */}
          <strong>Taille Conteneur</strong> : <span>{taille}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 2rem 1rem 3rem 0 */}
          <strong>Type Conteneur</strong> : <span>{type}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>Navire</strong> : <span>{navire}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>ETA</strong> : <span>{eta}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>N° Voyage</strong> : <span>{voyage}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>N° B/L</strong> : <span>{bl}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>Poids</strong> : <span>{poids}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>Contenu</strong> : <span>{contenu}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>N° Memo</strong> : <span>{numeromemo}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>Agence</strong> : <span>{agence}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>Caution</strong> : <span>{caution}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>Destination</strong> : <span>{destination}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>Date de Paiement Caution</strong> : <span>{dates}</span>
        </p>
        <br />
        <br />
        <br />
        <p className="print-source" style={{ textAlign: 'right', margin: '0rem 1rem 0rem 1rem' }}>
          {/* 1rem 1rem 0rem 1rem */}
          <strong>Date</strong> : <span>{date}</span>
        </p>
        {/* <div
          className="print-source"
          style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', width: '100%' }}
        >
          <table className="print-source" style={{ width: '100%' }}>
            <thead>
              <th>Numéro</th>
              <th>Site</th>
              <th>Sous-site</th>
              <th>Date Mouvement</th>
            </thead>
            <tbody style={{ width: '100%' }}>
              {rows.map((value, key) => {
                const { number, site, soussite, datemouvement  } = value;
                return (
                  <tr key={key} style={{ textAlign: 'center' }}>
                    <td>{number}</td>
                    <td>{site}</td>
                    <td>{soussite}</td>
                    <td>{datemouvement}</td>
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
              <th>Navire</th>
              <th>Port</th>
              <th>Date Arrivée</th>
              <th>Observation</th>
            </thead>
            <tbody style={{ width: '100%' }}>
              {rows.map((value, key) => {
                const { exnavire, port, datearrivee, observation } = value;
                return (
                  <tr key={key} style={{ textAlign: 'center' }}>
                    <td>{exnavire}</td>
                    <td>{port}</td>
                    <td>{datearrivee}</td>
                    <td>{observation}</td>
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
          </p>
          <p>
            <strong>Montant Net</strong> : {total} FC
          </p> */}
          {/* <p>
            <strong>Date</strong> : {date}
          </p> */}
        </div>
        <br />
        <br />
        <br />
        <div>
          <div>
            <p
              className="print-source"
              style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}
            >
              {/* <strong>NGUNGA WAMPILUKULA</strong> */}
              <strong>Chef de Sce Adj. Ctnr & Aire Stockage </strong>
            </p>
          </div>
          <div>
            <p
              className="print-source"
              style={{ textAlign: 'right', margin: '0rem 1rem 0rem 1rem' }}
            >
              {/* <strong>NGUNGA WAMPILUKULA</strong> */}
              <strong>Chef de Sce. Multimodal</strong>
            </p>
          </div>
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
            Société Anonyme Unipersonnelle avec conseil d'administration
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

export default ComponentToPrintMouv;
