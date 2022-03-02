import { Route } from "react-router-dom"



const routes = [
   {
        path: "home",
        // component: Component
   },
]





// função que retorna o objeto com as rotas adicionadas acima
function getRoutes(routes) {

   return routes.map((prop, key) => {

       return (
         <Route
          path = { prop.path }
          element= {<prop.component />}
          key={key}
         />
      );

   });

};

const user_routes = getRoutes(routes)
export default user_routes