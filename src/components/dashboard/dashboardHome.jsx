import TitleSection from "@/components/dashboard/titleSection";
import CardItem from "@/components/dashboard/cardItem";
import Chart from "@/components/dashboard/chart";
import TitleTab from "@/components/dashboard/titleTab";
import UserList from "@/components/dashboard/userlist";
import Chart2 from "@/components/dashboard/chart2";

export default function DashboardHome(){
    return (
        <>
        <TitleSection title="Dashboard"></TitleSection>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <CardItem number="100" modulo="Estudiantes"></CardItem>
          <CardItem number="1000" modulo="Publicaciones"></CardItem>
          <CardItem number="50" modulo="Dojos"></CardItem>
          <CardItem number="5689" modulo="Comentarios"></CardItem>
        </section>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
          <Chart name="Publicaciones por dia" chart="Chart"></Chart>
          <div class="row-span-3 bg-white shadow rounded-lg">
            <TitleTab></TitleTab>
            <div class="overflow-y-auto" style={{ maxHeight: '24rem' }}>
              <ul class="p-6 space-y-6">
                <UserList user="Cristian" img="" score="5.0"></UserList>
                <UserList user="Cristian" img="" score="5.0"></UserList>
                <UserList user="Cristian" img="" score="5.0"></UserList>
                <UserList user="Cristian" img="" score="5.0"></UserList>
                <UserList user="Cristian" img="" score="5.0"></UserList>
                <UserList user="Cristian" img="" score="5.0"></UserList>
                <UserList user="Cristian" img="" score="5.0"></UserList>
                <UserList user="Cristian" img="" score="5.0"></UserList>
                <UserList user="Cristian" img="" score="5.0"></UserList>
                <UserList user="Cristian" img="" score="5.0"></UserList>
                <UserList user="Cristian" img="" score="5.0"></UserList>
                <UserList user="Cristian" img="" score="5.0"></UserList>
                <UserList user="Cristian" img="" score="5.0"></UserList>
              </ul>
            </div>
          </div>
          <Chart2></Chart2>
        </section>
        </>
    )
}