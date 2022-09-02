import { ColCell } from "../../styles/grid/Col";
import Grid from "../../styles/grid/Grid";

export default function HomePage() {
  return (
    <>
      <Grid>
        <ColCell tablet={"1/3"} desktop={"3/7"}>
          Hello
        </ColCell>
        <ColCell tablet={"4/13"} desktop={"8/9"}>
          Hello
        </ColCell>
      </Grid>
    </>
  );
}
