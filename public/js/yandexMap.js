ymaps.ready(async () => {
  const Map = new ymaps.Map('first_map', {
    center: [35, 105],
    zoom: 2
  })
 
  const markerList = await (await fetch('/markerList')).json()
  
  function addPoint(map) {
    const {name, region, coordinatX, coordinatY} = map
    const newPoint = new ymaps.GeoObject({
      geometry: {
        type: 'Point',
        coordinates: [coordinatX, coordinatY],
      },
      properties: {
        hintContent: name
      }
    })
    newPoint.events.add('click', () => {
      document.location.href = `/article/${region}`
    })
    Map.geoObjects.add(newPoint)
  }
  await markerList.forEach(el=> {
     addPoint(el)
  });
})
//       hintContent: 'Sri-Lanka'
//     }
//   })

//   SriLanka.events.add('click', function () {
//     document.location.href = `http://localhost:3000/article/${SriLanka.properties._data.hintContent}`
//   })
//   Map.geoObjects.add(SriLanka)
//   function addPoint (name, coordinates, ) {
//       const newPoint = new ymaps.GeoObject({
//         geometry: {
//           type: 'Point',
//           coordinates: coordinates,
//         },
//         properties: {
//           hintContent: name
//         }
//       })
//       Map.geoObjects.add(newPoint)
//   }


