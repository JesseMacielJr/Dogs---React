import React from "react";
import Head from "../Helper/Head";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
// Usar quando tivermos uma parte inteira do site muito pesada ou usando biblioteca externa que não é utilizada no site inteiro
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
