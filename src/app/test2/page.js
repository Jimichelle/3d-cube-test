export default function Page() {
    return(
        <div>
            <head>
    <style> body { margin: 0; } </style>
  
    <script src="//unpkg.com/react/umd/react.production.min.js"></script>
    <script src="//unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
    <script src="//unpkg.com/@babel/standalone"></script>
  
    <script src="//unpkg.com/react-globe.gl"></script>
    <!--<script src="../../dist/react-globe.gl.js"></script>-->
  </head>
  
  <body>
  <div id="globeViz"></div>
  
  <script type="text/jsx">
    const { useState, useEffect } = React;
  
    const World = () => {
      const [countries, setCountries] = useState({ features: []});
  
      useEffect(() => {
        // load data
        fetch('../datasets/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(setCountries);
      }, []);
  
      return <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
  
        hexPolygonsData={countries.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.3}
        hexPolygonUseDots={true}
        hexPolygonColor={() => `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}`}
        hexPolygonLabel={({ properties: d }) => `
          <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
          Population: <i>${d.POP_EST}</i>
        `}
      />;
    };
  
    ReactDOM.render(
      <World />,
      document.getElementById('globeViz')
    );
  </script>
  </body>
        </div>
        
    )
}