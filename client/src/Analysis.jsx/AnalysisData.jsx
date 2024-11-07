import React from 'react';
import P2018 from '../img/P2018.png';
import P2019 from '../img/P2019.png';
import P2020 from '../img/P2020.png';
import P2021 from '../img/P2021.png';
import UP2018 from '../img/Up2018.png';
import UP2019 from '../img/Up2019.png';
import UP2020 from '../img/Up2020.png';
import UP2021 from '../img/Up2021.png';
import S2019 from '../img/S2019.png';
import S2018 from '../img/S2018.png';
import S2020 from '../img/S2020.png';
import S2021 from '../img/S2021.png';
import TotalBoysGirlsPrimary from '../img/TotalBoysGirlsPrimary.png';
import TotalBoysGirlsUpperPrimary from '../img/TotalBoysGirlsUpperPrimary.png';
import TotalBoysGirlsSecondary from '../img/TotalBoysGirlsSecondary.png';
import PBoys from '../img/PBoys.png';
import UPBoys from '../img/UPBoys.png';
import SBoys from '../img/SBoys.png';
import PGirls from '../img/PGirls.png';
import UPGirls from '../img/UPGirls.png';
import SGirls from '../img/SGirls.png';
import HighDroputRateGirlsPrimary from '../img/HighDroputRateGirlsPrimary.png';
import HighDroputRateGirlsUPrimary from '../img/HighDroputRateGirlsUPrimary.png';
import HighDroputRateGirlsSPrimary from '../img/HighDroputRateGirlsSPrimary.png';
import HighDroputRateBoysPrimary from '../img/HighDroputRateBoysPrimary.png';
import HighDroputRateBoysUPrimary from '../img/HighDroputRateBoysUPrimary.png';
import HighDroputRateBoysSecondary from '../img/HighDroputRateBoysSecondary.png';
import LowDroputRateBoysPrimary from '../img/LowDroputRateBoysPrimary.png';
import LowDroputRateBoysUPrimary from '../img/LowDroputRateBoysUPrimary.png';
import LowDroputRateBoysSecondary from '../img/LowDroputRateBoysSecondary.png';
import LowDroputRateGirlsPrimary from '../img/LowDroputRateGirlsPrimary.png';
import LowDroputRateGirlsUPrimary from '../img/LowDroputRateGirlsUPrimary.png';
import LowDroputRateGirlsSecondary from '../img/LowDroputRateGirlsSecondary.png';
import TotalBG2018 from '../img/TotalBG2018.png';
import TotalBG2019 from '../img/TotalBG2019.png';
import TotalBG2020 from '../img/TotalBG2020.png';
import TotalBG2021 from '../img/TotalBG2021.png';
import TrendAN from '../img/TrendAN.png';
import TrendMp from '../img/TrendMp.png';
import TrendAssam from '../img/TrendAssam.png';
import TrendIndia from '../img/TrendIndia.png';


const AnalysisData = () => {
  return (
    <div style={styles.container}>
      <h1>Dropout Rates Analysis</h1>
      <div style={styles.imageContainer}>
        <h2>Primary Education Dropout For All States</h2>
        <img src={P2018} alt="Dropout Rates for Primary Boys and Girls in India" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph displays dropout rates by gender in primary education (Class 1 to 5) for 2018-19 across Indian states and union territories. Notably, Arunachal Pradesh and Meghalaya have the highest dropout rates for both boys and girls, exceeding 15%. States like Bihar and Odisha also show high dropout rates, especially for boys. Conversely, Kerala and Lakshadweep exhibit minimal dropout rates, indicating better retention. While boys generally have higher dropout rates, regions like Nagaland and Uttarakhand show higher rates for girls. This data underscores the need for targeted educational policies to address regional and gender-specific disparities.</p>
        <img src={P2019} alt="Dropout Rates for Primary Boys and Girls in India" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph illustrates dropout rates by gender in primary education (Class 1 to 5) for 2019-20 across Indian states and union territories. Generally, boys have higher dropout rates. Arunachal Pradesh and Meghalaya exhibit the highest dropout rates for both genders, nearing 8%. Bihar and Odisha also show significant rates, particularly for boys. Conversely, Delhi, Goa, Kerala, and Lakshadweep have very low dropout rates, with Kerala and Lakshadweep near zero. Notable gender disparities include higher rates for boys in Rajasthan and Haryana, and higher rates for girls in Nagaland and Uttarakhand. This highlights the need for targeted educational policies.</p>
        <img src={P2020} alt="Dropout Rates for Primary Boys and Girls in India" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph displays dropout rates by gender in primary education (Class 1 to 5) for 2020-21 across Indian states and union territories. Boys generally have higher dropout rates. Arunachal Pradesh shows the highest dropout rates, nearing 10% for boys. Meghalaya and Mizoram also exhibit high dropout rates for both genders. Conversely, states like Delhi, Goa, Kerala, and Lakshadweep have very low dropout rates, with Kerala showing near-zero rates. Notable gender disparities include higher dropout rates for boys in Rajasthan and Haryana, and higher rates for girls in Nagaland and Uttarakhand. This data highlights the need for focused educational policies.</p>
        <img src={P2021} alt="Dropout Rates for Primary Boys and Girls in India" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph shows dropout rates by gender in primary education (Class 1 to 5) for 2021-22 across Indian states and union territories. Boys generally have higher dropout rates. Arunachal Pradesh and Meghalaya exhibit the highest dropout rates, exceeding 10% for both genders. Bihar and Odisha also have significant rates. States like Delhi, Goa, Kerala, and Lakshadweep show very low dropout rates, with Kerala and Lakshadweep near zero. Notable gender disparities include higher dropout rates for boys in Rajasthan and Haryana, and higher rates for girls in Nagaland and Uttarakhand. This data highlights the need for focused educational policies.</p>
      </div>
      <div style={styles.imageContainer}>
        <h2>Upper Primary Education Dropout For All States</h2>
        <img src={UP2018} alt="Dropout Rates by Gender in Upper Primary Education" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph shows dropout rates by gender in upper primary education for 2018-19 across Indian states and union territories. Girls generally have higher dropout rates than boys. Arunachal Pradesh, Meghalaya, and Nagaland exhibit the highest dropout rates, exceeding 12% for both genders. Bihar and Odisha also show significant dropout rates. Conversely, Delhi, Goa, Kerala, and Lakshadweep have very low dropout rates. Notable gender disparities include higher dropout rates for girls in Rajasthan and Haryana, while states like Sikkim and Mizoram have higher rates for boys. This data highlights the need for targeted educational policies to address these disparities.</p>
        <img src={UP2019} alt="Dropout Rates for Primary Boys and Girls in India" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph shows dropout rates by gender in upper primary education for 2019-20 across Indian states and union territories. Girls generally have higher dropout rates than boys. Arunachal Pradesh, Meghalaya, and Nagaland exhibit the highest dropout rates, with girls exceeding 8%. Bihar and Odisha also show significant dropout rates. Conversely, Delhi, Goa, Kerala, and Lakshadweep have very low dropout rates. Notable gender disparities include higher dropout rates for girls in Rajasthan and Haryana, while states like Sikkim and Mizoram have higher rates for boys. This data highlights the need for targeted educational policies to address these disparities.</p>
        <img src={UP2020} alt="Dropout Rates for Primary Boys and Girls in India" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph shows dropout rates by gender in upper primary education for 2020-21 across Indian states and union territories. Girls generally have higher dropout rates than boys. Arunachal Pradesh, Meghalaya, and Nagaland exhibit the highest dropout rates, with boys reaching nearly 10%. Bihar and Odisha also show significant dropout rates. Conversely, Delhi, Goa, Kerala, and Lakshadweep have very low dropout rates. Notable gender disparities include higher dropout rates for girls in Rajasthan and Haryana, while states like Sikkim and Mizoram have higher rates for boys. This data highlights the need for targeted educational policies to address these disparities.</p>
        <img src={UP2021} alt="Dropout Rates for Primary Boys and Girls in India" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph shows dropout rates by gender in upper primary education for 2021-22 across Indian states and union territories. Girls generally have higher dropout rates than boys. Arunachal Pradesh, Meghalaya, and Nagaland exhibit the highest dropout rates, with boys reaching nearly 12%. Bihar and Odisha also show significant dropout rates. Conversely, Delhi, Goa, Kerala, and Lakshadweep have very low dropout rates. Notable gender disparities include higher dropout rates for girls in Rajasthan and Haryana, while states like Sikkim and Mizoram have higher rates for boys. This data highlights the need for targeted educational policies to address these disparities.</p>
      </div>
      <div style={styles.imageContainer}>
        <h2>Secondary Education Dropout For All States</h2>
        <img src={S2018} alt="Dropout Rates by Gender in Upper Primary Education" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph shows dropout rates by gender in secondary education for 2018-19 across Indian states and union territories. Girls generally have higher dropout rates than boys. Arunachal Pradesh, Meghalaya, and Nagaland exhibit the highest dropout rates, exceeding 35% for both genders. Assam and Odisha also show significant dropout rates. Conversely, Delhi, Kerala, and Lakshadweep have relatively low dropout rates. Notable gender disparities include higher dropout rates for girls in Andhra Pradesh and Uttar Pradesh, while states like Maharashtra and Mizoram have higher rates for boys. This data underscores the need for targeted educational policies to address these disparities and reduce dropout rates in secondary education.</p>
        <img src={S2019} alt="Dropout Rates for Primary Boys and Girls in India" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph shows dropout rates by gender in secondary education for 2019-20 across Indian states and union territories. Girls generally have higher dropout rates than boys. Arunachal Pradesh, Meghalaya, and Nagaland exhibit the highest dropout rates, with boys reaching over 35%. Assam and Odisha also show significant dropout rates. Conversely, Delhi, Kerala, and Lakshadweep have relatively low dropout rates. Notable gender disparities include higher dropout rates for girls in Andhra Pradesh and Uttar Pradesh, while states like Maharashtra and Mizoram have higher rates for boys. This data underscores the need for targeted educational policies to address these disparities and reduce dropout rates in secondary education.</p>
        <img src={S2020} alt="Dropout Rates for Primary Boys and Girls in India" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph shows dropout rates by gender in secondary education for 2020-21 across Indian states and union territories. Girls generally have higher dropout rates than boys. Arunachal Pradesh and Meghalaya exhibit the highest dropout rates, exceeding 30% for both genders. Assam and Odisha also show significant dropout rates. Conversely, Delhi, Goa, Kerala, and Lakshadweep have relatively low dropout rates. Notable gender disparities include higher dropout rates for girls in Andhra Pradesh and Haryana, while states like Maharashtra and Mizoram have higher rates for boys. This data underscores the need for targeted educational policies to address these disparities and reduce dropout rates in secondary education.</p>
        <img src={S2021} alt="Dropout Rates for Primary Boys and Girls in India" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph shows dropout rates by gender in secondary education for 2021-22 across Indian states and union territories. Girls generally have higher dropout rates than boys. Arunachal Pradesh and Meghalaya exhibit the highest dropout rates, with girls reaching nearly 30%. Assam and Odisha also show significant dropout rates. Conversely, Delhi, Goa, Kerala, and Lakshadweep have relatively low dropout rates. Notable gender disparities include higher dropout rates for girls in Andhra Pradesh and Haryana, while states like Maharashtra and Mizoram have higher rates for boys. This data underscores the need for targeted educational policies to address these disparities and reduce dropout rates in secondary education.</p>
      </div>
      <div style={styles.imageContainer}>
        <h2>Dropout Rate For Boys All States (2018-2021)</h2>
        <img src={PBoys} alt="Dropout Rates by Gender in Upper Primary Education" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph displays the dropout rates for boys in primary education across various Indian states and union territories from 2018 to 2021. Arunachal Pradesh has the highest dropout rate at 10.4%, followed by Meghalaya (9.5%) and Nagaland (9.3%). Andaman and Nicobar Islands, Delhi, and Daman and Diu show the lowest dropout rates, each below 1%. Other states with significant dropout rates include Mizoram (7.4%) and Manipur (5.5%). This data highlights regional disparities in dropout rates, emphasizing the need for targeted interventions to improve retention in primary education for boys.</p>
        <img src={UPBoys} alt="Dropout Rates for Primary Boys and Girls in India" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph displays the mean dropout rates for boys in upper primary education across various Indian states and union territories from 2018 to 2021. Meghalaya has the highest dropout rate at 9.8%, followed by Madhya Pradesh (6.4%) and Nagaland (6.2%). Andaman and Nicobar Islands, Chandigarh, and Delhi show the lowest dropout rates, each below 1%. Other states with significant dropout rates include Andhra Pradesh (6.8%) and Arunachal Pradesh (6.0%). This data highlights regional disparities in dropout rates, emphasizing the need for targeted interventions to improve retention in upper primary education for boys.</p>
        <img src={SBoys} alt="Dropout Rates for Primary Boys and Girls in India" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph displays the mean dropout rates for boys in secondary education across various Indian states and union territories from 2018 to 2021. Arunachal Pradesh has the highest dropout rate at 28.0%, followed by Andhra Pradesh (23.8%) and Mizoram (22.3%). Chandigarh shows the lowest dropout rate at 3.2%. Other states with significant dropout rates include Assam (20.8%), Madhya Pradesh (18.0%), and Nagaland (19.2%). Delhi, Kerala, and Lakshadweep have relatively lower dropout rates, below 10%. This data highlights the substantial regional disparities in dropout rates for boys in secondary education, emphasizing the need for targeted interventions to improve retention and reduce dropout rates in states with higher rates.</p>
      </div>
      <div style={styles.imageContainer}>
        <h2>Dropout Rate For Girls All States (2018-2021)</h2>
        <img src={PGirls} alt="Dropout Rates by Gender in Upper Primary Education" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph displays the mean dropout rates for girls in primary education across various Indian states and union territories from 2018 to 2021. Meghalaya has the highest dropout rate at 9.4%, followed by Arunachal Pradesh (8.4%) and Mizoram (8.2%). Delhi, Daman and Diu, and Lakshadweep show the lowest dropout rates, each below 1%. Other states with significant dropout rates include Manipur (6.4%) and Bihar (3.4%). This data highlights regional disparities in dropout rates, emphasizing the need for targeted interventions to improve retention in primary education for girls.</p>
        <img src={UPGirls} alt="Dropout Rates for Primary Boys and Girls in India" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph displays the mean dropout rates for girls in upper primary education across various Indian states and union territories from 2018 to 2021. Arunachal Pradesh and Andhra Pradesh have the highest dropout rates at 7.5% and 7.4%, respectively. Meghalaya also shows a high dropout rate of 6.9%. Conversely, Delhi, Daman and Diu, and West Bengal have the lowest dropout rates, each below 1%. Other states with significant dropout rates include Nagaland (5.9%) and Bihar (4.0%). This data highlights regional disparities in dropout rates, emphasizing the need for targeted interventions to improve retention in upper primary education for girls.</p>
        <img src={SGirls} alt="Dropout Rates for Primary Boys and Girls in India" style={styles.image} />
        <p style={{ textAlign: 'justify' }}>The graph displays the mean dropout rates for girls in secondary education across various Indian states and union territories from 2018 to 2021. Arunachal Pradesh has the highest dropout rate at 29.4%, followed by Andhra Pradesh (23.2%) and Assam (22.5%). Chandigarh and Delhi show the lowest dropout rates at 2.2% and 8.6%, respectively. Other states with significant dropout rates include Bihar (15.2%), Maharashtra (19.6%), and Meghalaya (18.7%). This data highlights regional disparities in dropout rates, emphasizing the need for targeted interventions to improve retention in secondary education for girls.</p>
      </div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
         High Dropout Rates for Boys (2018-2021)
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div
            className="section"
            style={{
              flex: "1 1 calc(33.333% - 20px)",
              marginBottom: "20px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              backgroundColor: "#fff",
            }}
          >
            <h2
              style={{
                color: "#333",
                borderBottom: "2px solid #f4f4f4",
                paddingBottom: "10px",
              }}
            >
              Primary Education Dropout Rates
            </h2>
            <img
              src={HighDroputRateBoysPrimary}
              alt="Primary Education Dropout Rates"
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
                margin: "0 auto 20px",
              }}
            />
            <p>
              The first graph shows the top five states with the highest dropout rates
              in primary education for boys:
            </p>
            <ul>
              <li>Meghalaya: 9.04%</li>
              <li>Jharkhand: 8.76%</li>
              <li>Arunachal Pradesh: 8.25%</li>
              <li>Manipur: 7.18%</li>
              <li>Assam: 5.14%</li>
            </ul>
            <p>
              These states exhibit significant challenges in retaining boys in primary
              education. Meghalaya and Jharkhand lead with the highest dropout rates,
              both exceeding 8%. Factors contributing to these high rates may include
              socio-economic conditions, inadequate school infrastructure, and
              cultural factors that prioritize work over education.
            </p>
          </div>
          <div
            className="section"
            style={{
              flex: "1 1 calc(33.333% - 20px)",
              marginBottom: "20px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              backgroundColor: "#fff",
            }}
          >
            <h2
              style={{
                color: "#333",
                borderBottom: "2px solid #f4f4f4",
                paddingBottom: "10px",
              }}
            >
              Upper Primary Education Dropout Rates
            </h2>
            <img
              src={HighDroputRateBoysUPrimary}
              alt="Upper Primary Education Dropout Rates"
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
                margin: "0 auto 20px",
              }}
            />
            <p>
              The second graph illustrates the top five states with the highest
              dropout rates in upper primary education for boys:
            </p>
            <ul>
              <li>Jharkhand: 13.78%</li>
              <li>Meghalaya: 8.36%</li>
              <li>Bihar: 7.17%</li>
              <li>Arunachal Pradesh: 7.11%</li>
              <li>Assam: 6.12%</li>
            </ul>
            <p>
              Jharkhand shows a dramatic increase in dropout rates from primary to
              upper primary education, reaching 13.78%. This trend indicates that the
              transition from primary to upper primary school is a critical period
              where many boys leave the education system. Meghalaya, Bihar, and
              Arunachal Pradesh also show considerable dropout rates, suggesting that
              interventions are needed to support students during this transition
              phase.
            </p>
          </div>
          <div
            className="section"
            style={{
              flex: "1 1 calc(33.333% - 20px)",
              marginBottom: "20px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              backgroundColor: "#fff",
            }}
          >
            <h2
              style={{
                color: "#333",
                borderBottom: "2px solid #f4f4f4",
                paddingBottom: "10px",
              }}
            >
              Secondary Education Dropout Rates
            </h2>
            <img
              src={HighDroputRateBoysSecondary}
              alt="Secondary Education Dropout Rates"
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
                margin: "0 auto 20px",
              }}
            />
            <p>
              The third graph highlights the top five states with the highest dropout
              rates in secondary education for boys:
            </p>
            <ul>
              <li>Assam: 28.72%</li>
              <li>Arunachal Pradesh: 23.15%</li>
              <li>Bihar: 21.98%</li>
              <li>Meghalaya: 20.94%</li>
              <li>Gujarat: 19.73%</li>
            </ul>
            <p>
              Assam exhibits the highest dropout rate in secondary education at
              28.72%, indicating a severe dropout issue as boys progress to higher
              grades. The sharp increase in dropout rates from primary and upper
              primary levels to secondary education suggests systemic issues, such as
              lack of access to secondary schools, financial constraints, and early
              employment pressures. Arunachal Pradesh, Bihar, and Meghalaya also show
              high dropout rates, indicating a consistent pattern of educational
              disengagement.
            </p>
          </div>
        </div>
        <style>
          {`
            @media (max-width: 768px) {
              .section {
                flex: 1 1 100%;
              }
            }
          `}
        </style>
      </div>
      <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        High Dropout Rates for Girls (2018-2021)
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div
          className="section"
          style={{
            flex: "1 1 calc(33.333% - 20px)",
            marginBottom: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          <h2
            style={{
              color: "#333",
              borderBottom: "2px solid #f4f4f4",
              paddingBottom: "10px",
            }}
          >
            Primary Education Dropout Rates
          </h2>
          <img
            src={HighDroputRateGirlsPrimary}
            alt="Primary Education Dropout Rates"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto 20px",
            }}
          />
          <p>
            The first graph shows the top five states with the highest dropout rates
            in primary education for girls:
          </p>
          <ul>
            <li>Meghalaya: 8.15%</li>
            <li>Arunachal Pradesh: 7.91%</li>
            <li>Manipur: 6.53%</li>
            <li>Bihar: 4.78%</li>
            <li>Jammu and Kashmir: 4.60%</li>
          </ul>
          <p>
            These states exhibit significant challenges in retaining girls in primary
            education. Meghalaya and Arunachal Pradesh lead with the highest dropout rates,
            both nearing or exceeding 8%. Factors contributing to these high rates may include
            socio-economic conditions, inadequate school infrastructure, and
            cultural factors that prioritize work over education.
          </p>
        </div>
        <div
          className="section"
          style={{
            flex: "1 1 calc(33.333% - 20px)",
            marginBottom: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          <h2
            style={{
              color: "#333",
              borderBottom: "2px solid #f4f4f4",
              paddingBottom: "10px",
            }}
          >
            Upper Primary Education Dropout Rates
          </h2>
          <img
            src={HighDroputRateGirlsUPrimary}
            alt="Upper Primary Education Dropout Rates"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto 20px",
            }}
          />
          <p>
            The second graph illustrates the top five states with the highest
            dropout rates in upper primary education for girls:
          </p>
          <ul>
            <li>Bihar: 7.47%</li>
            <li>Arunachal Pradesh: 7.40%</li>
            <li>Meghalaya: 6.90%</li>
            <li>Jharkhand: 5.88%</li>
            <li>Gujarat: 5.53%</li>
          </ul>
          <p>
            Bihar and Arunachal Pradesh show the highest dropout rates in upper primary education,
            indicating that the transition from primary to upper primary school is a critical period
            where many girls leave the education system. The dropout rates in these states suggest
            that interventions are needed to support students during this transition phase.
          </p>
        </div>
        <div
          className="section"
          style={{
            flex: "1 1 calc(33.333% - 20px)",
            marginBottom: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          <h2
            style={{
              color: "#333",
              borderBottom: "2px solid #f4f4f4",
              paddingBottom: "10px",
            }}
          >
            Secondary Education Dropout Rates
          </h2>
          <img
            src={HighDroputRateGirlsSPrimary}
            alt="Secondary Education Dropout Rates"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto 20px",
            }}
          />
          <p>
            The third graph highlights the top five states with the highest dropout
            rates in secondary education for girls:
          </p>
          <ul>
            <li>Assam: 29.45%</li>
            <li>Bihar: 23.15%</li>
            <li>Arunachal Pradesh: 22.48%</li>
            <li>Meghalaya: 19.60%</li>
            <li>Tripura: 19.32%</li>
          </ul>
          <p>
            Assam exhibits the highest dropout rate in secondary education at
            29.45%, indicating a severe dropout issue as girls progress to higher
            grades. The sharp increase in dropout rates from primary and upper
            primary levels to secondary education suggests systemic issues, such as
            lack of access to secondary schools, financial constraints, and early
            employment pressures. Arunachal Pradesh, Bihar, and Meghalaya also show
            high dropout rates, indicating a consistent pattern of educational
            disengagement.
          </p>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .section {
              flex: 1 1 100%;
            }
          }
        `}
      </style>
    </div>

    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
       Low Dropout Rates for Boys (2018-2021)
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div
          className="section"
          style={{
            flex: "1 1 calc(33.333% - 20px)",
            marginBottom: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          <h2
            style={{
              color: "#333",
              borderBottom: "2px solid #f4f4f4",
              paddingBottom: "10px",
            }}
          >
            Primary Education Dropout Rates
          </h2>
          <img
            src={LowDroputRateBoysPrimary}
            alt="Primary Education Dropout Rates"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto 20px",
            }}
          />
          <p>
            The first graph shows the top five states with the lowest dropout rates
            in primary education for boys:
          </p>
          <ul>
            <li>Chandigarh: 0.04%</li>
            <li>Daman and Diu: 0.17%</li>
            <li>Tamil Nadu: 0.35%</li>
            <li>Delhi: 0.41%</li>
            <li>Andhra Pradesh: 0.47%</li>
          </ul>
          <p>
            These states have successfully maintained low dropout rates in primary education for boys. Chandigarh leads with the lowest rate at 0.04%. Factors contributing to these low rates may include strong educational infrastructure, effective policies, and socio-economic support.
          </p>
        </div>
        <div
          className="section"
          style={{
            flex: "1 1 calc(33.333% - 20px)",
            marginBottom: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          <h2
            style={{
              color: "#333",
              borderBottom: "2px solid #f4f4f4",
              paddingBottom: "10px",
            }}
          >
            Upper Primary Education Dropout Rates
          </h2>
          <img
            src={LowDroputRateBoysUPrimary}
            alt="Upper Primary Education Dropout Rates"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto 20px",
            }}
          />
          <p>
            The second graph illustrates the top five states with the lowest
            dropout rates in upper primary education for boys:
          </p>
          <ul>
            <li>Chandigarh: 0.07%</li>
            <li>Tamil Nadu: 0.15%</li>
            <li>Andaman and Nicobar Islands: 0.23%</li>
            <li>Daman and Diu: 0.35%</li>
            <li>Delhi: 0.43%</li>
          </ul>
          <p>
            Chandigarh again shows remarkable performance with the lowest dropout rate in upper primary education. These states have implemented effective measures to ensure that boys continue their education through upper primary levels.
          </p>
        </div>
        <div
          className="section"
          style={{
            flex: "1 1 calc(33.333% - 20px)",
            marginBottom: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          <h2
            style={{
              color: "#333",
              borderBottom: "2px solid #f4f4f4",
              paddingBottom: "10px",
            }}
          >
            Secondary Education Dropout Rates
          </h2>
          <img
            src={LowDroputRateBoysSecondary}
            alt="Secondary Education Dropout Rates"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto 20px",
            }}
          />
          <p>
            The third graph highlights the top five states with the lowest dropout
            rates in secondary education for boys:
          </p>
          <ul>
            <li>Chandigarh: 3.18%</li>
            <li>Himachal Pradesh: 5.50%</li>
            <li>Ladakh: 5.69%</li>
            <li>Kerala: 8.45%</li>
            <li>Lakshadweep: 10.55%</li>
          </ul>
          <p>
            In secondary education, Chandigarh again leads with the lowest dropout rate at 3.18%. These states have focused on creating supportive environments and policies to retain boys in secondary education, resulting in lower dropout rates.
          </p>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .section {
              flex: 1 1 100%;
            }
          }
        `}
      </style>
    </div>
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
       Low Dropout Rates for Girls (2018-2021)
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div
          className="section"
          style={{
            flex: "1 1 calc(33.333% - 20px)",
            marginBottom: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          <h2
            style={{
              color: "#333",
              borderBottom: "2px solid #f4f4f4",
              paddingBottom: "10px",
            }}
          >
            Primary Education Dropout Rates
          </h2>
          <img
            src={LowDroputRateGirlsPrimary}
            alt="Primary Education Dropout Rates"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto 20px",
            }}
          />
          <p>
            The first graph shows the top five states with the lowest dropout rates
            in primary education for girls:
          </p>
          <ul>
            <li>Daman and Diu: 0.06%</li>
            <li>Chandigarh: 0.20%</li>
            <li>Andhra Pradesh: 0.39%</li>
            <li>Delhi: 0.40%</li>
            <li>Tamil Nadu: 0.45%</li>
          </ul>
          <p>
            These states have successfully maintained low dropout rates in primary education for girls. Daman and Diu lead with the lowest rate at 0.06%. Factors contributing to these low rates may include strong educational infrastructure, effective policies, and socio-economic support.
          </p>
        </div>
        <div
          className="section"
          style={{
            flex: "1 1 calc(33.333% - 20px)",
            marginBottom: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          <h2
            style={{
              color: "#333",
              borderBottom: "2px solid #f4f4f4",
              paddingBottom: "10px",
            }}
          >
            Upper Primary Education Dropout Rates
          </h2>
          <img
            src={LowDroputRateGirlsUPrimary}
            alt="Upper Primary Education Dropout Rates"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto 20px",
            }}
          />
          <p>
            The second graph illustrates the top five states with the lowest
            dropout rates in upper primary education for girls:
          </p>
          <ul>
            <li>West Bengal: 0.0%</li>
            <li>Daman and Diu: 0.0%</li>
            <li>Tamil Nadu: 0.30%</li>
            <li>Sikkim: 0.30%</li>
            <li>Kerala: 0.30%</li>
          </ul>
          <p>
            West Bengal and Daman and Diu show exceptional performance with a 0.0% dropout rate in upper primary education. These states have implemented effective measures to ensure that girls continue their education through upper primary levels.
          </p>
        </div>
        <div
          className="section"
          style={{
            flex: "1 1 calc(33.333% - 20px)",
            marginBottom: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          <h2
            style={{
              color: "#333",
              borderBottom: "2px solid #f4f4f4",
              paddingBottom: "10px",
            }}
          >
            Secondary Education Dropout Rates
          </h2>
          <img
            src={LowDroputRateGirlsSecondary}
            alt="Secondary Education Dropout Rates"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto 20px",
            }}
          />
          <p>
            The third graph highlights the top five states with the lowest dropout
            rates in secondary education for girls:
          </p>
          <ul>
            <li>Chandigarh: 2.15%</li>
            <li>Kerala: 4.47%</li>
            <li>Himachal Pradesh: 4.47%</li>
            <li>Puducherry: 4.50%</li>
            <li>Ladakh: 5.42%</li>
          </ul>
          <p>
            In secondary education, Chandigarh again leads with the lowest dropout rate at 2.15%. These states have focused on creating supportive environments and policies to retain girls in secondary education, resulting in lower dropout rates.
          </p>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .section {
              flex: 1 1 100%;
            }
          }
        `}
      </style>
    </div>
      <div style={styles.imageContainer}>
        <h2>Dropout Rates Boys & Girls </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ marginRight: '20px' }}>
           
            <img src={TotalBG2018} alt="Dropout Rates by Gender in Primary Education" style={styles.image} />
          </div>
          <div style={{ marginRight: '20px' }}>
           
            <img src={TotalBG2019} alt="Dropout Rates by Gender in Upper Primary Education" style={styles.image} />
          </div>
          <div style={{ marginRight: '20px' }}>
            
            <img src={TotalBG2020} alt="Dropout Rates by Gender in Secondary Education" style={styles.image} />
          </div>
          <div>
            
            <img src={TotalBG2021} alt="Dropout Rates by Gender in Secondary Education" style={styles.image} />
          </div>
          {/* <p style={{ textAlign: 'justify' }}>
            The graphs show the total dropout rates for boys and girls from 2018 to 2021. The dropout rates are slightly higher for boys compared to girls in each year:
          </p>
          <ul>
            <li>2018-19: Boys 53.5%, Girls 46.5%</li>
            <li>2019-20: Boys 54.6%, Girls 45.4%</li>
            <li>2020-21: Boys 53.5%, Girls 46.5%</li>
            <li>2021-22: Boys 53.1%, Girls 46.9%</li>
          </ul> */}
        
        </div>
      </div>

      
      <div style={styles.imageContainer}>
        <h1 style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>Dropout Rate Trends (2018-2021)</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ marginRight: '20px' }}>
           
            <img src={TrendIndia} alt="Dropout Rates by Gender in Primary Education" style={styles.image} />
            <p style={{ textAlign: 'justify' }}>The dropout rates for primary boys and girls in India from 2018 to 2021 show a significant decline, followed by a slight increase. For primary boys, the dropout rate dropped from 4.5% in 2018 to about 0.5% in 2020, before rising slightly to 1.5% in 2021. For primary girls, the rate decreased from 4% in 2018 to around 0.5% in 2020, then increased to 1% in 2021. The overall trend indicates a substantial reduction in dropout rates for both genders until 2020, potentially due to improved education policies, with a minor rebound in 2021, possibly influenced by external factors like the COVID-19 pandemic.</p>
          </div>
          <div style={{ marginRight: '20px' }}>
           
            <img src={TrendAssam} alt="Dropout Rates by Gender in Upper Primary Education" style={styles.image} />
            <p style={{ textAlign: 'justify' }}>
The dropout rates for primary boys and girls in Assam from 2018 to 2021 exhibit different patterns. For primary boys, the dropout rate rose from about 4.5% in 2018 to 5% in 2019, then decreased to around 4% in 2020 before surging to 7% in 2021. For primary girls, the rate increased steadily from 3.5% in 2018 to 5% in 2021, with a notable dip to about 2.5% in 2020. The trends indicate an overall increase in dropout rates for both genders over the period, with a sharp rise for boys in 2021, potentially reflecting socioeconomic or policy changes impacting education stability.</p>
          </div>
          <div>
           
            <img src={TrendAN} alt="Dropout Rates by Gender in Secondary Education" style={styles.image} />
            <p style={{ textAlign: 'justify' }}>The dropout rates for primary boys and girls in the Andaman and Nicobar Islands show distinct trends from 2018 to 2021. For primary boys, the dropout rate remained relatively stable around 0.7% until 2019, then spiked to about 2.2% in 2020 before sharply decreasing to nearly 0% in 2021. In contrast, the dropout rate for primary girls started higher at 1.2% in 2018, decreased to about 0.5% in 2019, peaked at 2.5% in 2020, and then significantly dropped to approximately 1% in 2021. The trends indicate a notable increase in dropout rates in 2020 for both genders, likely due to external factors, followed by substantial improvements in 2021.
</p>
          </div>
          <div>
           
            <img src={TrendMp} alt="Dropout Rates by Gender in Secondary Education" style={styles.image} />
            <p style={{ textAlign: 'justify' }}>The trend analysis of dropout rates for primary boys and girls in Madhya Pradesh from 2018 to 2021, created using linear regression, indicates a significant decline from 2018 to 2019 for both genders. For boys, the rate dropped from 3.5% to below 1%, while for girls, it decreased from 3% to just above 1%. However, from 2019 onwards, dropout rates for both boys and girls show a gradual increase, with boys reaching approximately 2.5% and girls around 2.8% by 2021. This suggests an initial improvement followed by a concerning rise in dropout rates in recent years.</p>
          </div>
        </div>
      </div>
      
      
      <div style={styles.imageContainer}>
        <h2>Dropout Rates by Gender for All states (2018-2021)</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ marginRight: '20px' }}>
            <h3>Primary Education</h3>
            <img src={TotalBoysGirlsPrimary} alt="Dropout Rates by Gender in Primary Education" style={styles.image} />
          </div>
          <div style={{ marginRight: '20px' }}>
            <h3>Upper Primary Education</h3>
            <img src={TotalBoysGirlsUpperPrimary} alt="Dropout Rates by Gender in Upper Primary Education" style={styles.image} />
          </div>
          <div>
            <h3>Secondary Education</h3>
            <img src={TotalBoysGirlsSecondary} alt="Dropout Rates by Gender in Secondary Education" style={styles.image} />
          </div>
        </div>
      </div>
     
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  imageContainer: {
    marginBottom: '40px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    marginBottom: '40px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto 20px',
  },
  
};

export default AnalysisData;
