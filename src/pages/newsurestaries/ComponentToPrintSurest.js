import React from 'react';
import './Surestarie.css';

class ComponentToPrintSurest extends React.PureComponent {
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
      total,
      numero,
      port,
      size,
      bl,
      voyage,
      detention,
      caution,
      defalquer,
      rembourser,
      montantafacture
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
        <h3 className="print-source" style={{ textAlign: 'center' }}>
          RESTITUTION AVEC/OU SANS SURESTARIE
        </h3>
        <h3 className="print-source" style={{ textAlign: 'center' }}>
          N° ....../20...
        </h3>
        <br />
        <br />
        <p className="print-source" style={{ textAlign: 'right', margin: '2rem 1rem 3rem 0' }}>
          <strong>Client</strong> : <span>{client}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          <strong>N° Conteneur</strong> : <span>{numero}</span>
        </p>
        {/* <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 6.8rem' }}> */}
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          <strong>Taille Conteneur</strong> : <span>{size}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          <strong>N° B/L</strong> : <span>{bl}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          <strong>N° Voyage</strong> : <span>{voyage}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          <strong>Port</strong> : <span>{port}</span>
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          <strong>Détention</strong> : <span>{detention}</span> Jours
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          <strong>Montant Total</strong> : <span>{total}</span> CDF/USD
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          <strong>Caution Versée</strong> : <span>{caution}</span> CDF/USD
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          <strong>Montant Défalqué</strong> : <span>{defalquer}</span> CDF/USD
        </p>
        <p className="print-source" style={{ textAlign: 'left', margin: '0rem 1rem 0rem 1rem' }}>
          <strong>Montant à Rembourser</strong> : <span>{rembourser}</span> CDF/USD
        </p>
        {/* <div
          className="print-source"
          style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', width: '100%' }}
        >
          <table className="print-source" style={{ width: '100%' }}>
            <thead>
              <th>N° Item</th>
              <th>Descriptions</th>
              <th>Poids/Volume</th>
              <th>Montant</th>
            </thead>
            <tbody style={{ width: '100%' }}>
              {rows.map((value, key) => {
                const { number, description, weight, price } = value;
                return (
                  <tr key={key} style={{ textAlign: 'center' }}>
                    <td>{number}</td>
                    <td>{description}</td>
                    <td>{weight}</td>
                    <td>{price}</td>
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
            bottom: '35%',
            right: 0,
            textAlign: 'right',
            margin: '1rem 1rem 1rem 0'
          }}
        >
          <p>
            <strong>Montant Net à Payer</strong> : {montantafacture} CDF/USD
          </p>
          {/* <br /> */}
          <p>
            <strong>Date </strong> : {date}
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
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
              <strong>Chef de Service Multimodal & Stockage</strong>
            </p>
          </div>
          <div>
            <p
              className="print-source"
              style={{ textAlign: 'right', margin: '0rem 1rem 0rem 1rem' }}
            >
              {/* <strong>NGUNGA WAMPILUKULA</strong> */}
              <strong>Sous - Directeur OPS</strong>
            </p>
          </div>
        </div>
        <br />
        <div
          className="print-source"
          style={{
            position: 'absolute',
            bottom: '15%',
            // right: 0,
            textAlign: 'left',
            margin: '0rem 1rem 0rem 1rem'
            // margin: '3rem 1rem 3rem 0'
          }}
        >
          {/* <p>
            <strong>N.B:</strong> Facture payable 15 jours francs à compter de la date d'arrivée du
            navire
          </p> */}
          <p>
            <strong>Compte n° :</strong> 05100-05101-03006717401-55/USD
          </p>
          <p>
            <strong>Banque :</strong> RAWBANK
          </p>
          <p>
            <strong>Code Swift :</strong> NCDCDKI
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
          {/* {' '}
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
          </p> */}
        </div>
      </div>
    );
  }
}

export default ComponentToPrintSurest;
