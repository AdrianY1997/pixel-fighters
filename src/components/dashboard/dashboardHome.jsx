import TitleSection from "@/components/dashboard/titleSection";
import CardItem from "@/components/dashboard/cardItem";
import Chart from "@/components/dashboard/chart";
import TitleTab from "@/components/dashboard/titleTab";
import UserList from "@/components/dashboard/userlist";
import Chart2 from "@/components/dashboard/chart2";
import { prisma } from "@/services/database/client";

export default async function DashboardHome() {
  const users = await prisma.$queryRaw`SELECT count(*) as 'count' from user`;
  const dojos =
    await prisma.$queryRaw`SELECT count(*) as 'count' from category`;
  const categories =
    await prisma.$queryRaw`SELECT count(*) as 'count' from dojo`;
  const comments =
    await prisma.$queryRaw`SELECT count(*) as 'count' from publication`;

  const counts = {
    user: Number(users[0].count),
    category: Number(categories[0].count),
    dojo: Number(dojos[0].count),
    comment: Number(comments[0].count),
  };

  console.log(counts);

  return (
    <>
      <TitleSection title="Dashboard"></TitleSection>
      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <CardItem number={counts.user} modulo="Estudiantes"></CardItem>
        <CardItem number={counts.category} modulo="Categorías"></CardItem>
        <CardItem number={counts.dojo} modulo="Dojos"></CardItem>
        <CardItem number={counts.comment} modulo="Comentarios"></CardItem>
      </section>
      {/* <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
        <Chart name="Publicaciones por dia" chart="Chart"></Chart>
        <div className="row-span-3 bg-white shadow rounded-lg">
          <TitleTab></TitleTab>
          <div className="overflow-y-auto" style={{ maxHeight: "24rem" }}>
            <ul className="p-6 space-y-6">
              <UserList user="Cristian" img="#" score="5.0"></UserList>
              <UserList user="Cristian" img="#" score="5.0"></UserList>
              <UserList user="Cristian" img="#" score="5.0"></UserList>
              <UserList user="Cristian" img="#" score="5.0"></UserList>
              <UserList user="Cristian" img="#" score="5.0"></UserList>
              <UserList user="Cristian" img="#" score="5.0"></UserList>
              <UserList user="Cristian" img="#" score="5.0"></UserList>
              <UserList user="Cristian" img="#" score="5.0"></UserList>
              <UserList user="Cristian" img="#" score="5.0"></UserList>
              <UserList user="Cristian" img="#" score="5.0"></UserList>
              <UserList user="Cristian" img="#" score="5.0"></UserList>
              <UserList user="Cristian" img="#" score="5.0"></UserList>
              <UserList user="Cristian" img="#" score="5.0"></UserList>
            </ul>
          </div>
        </div>
        <Chart2></Chart2>
      </section> */}
    </>
  );
}
