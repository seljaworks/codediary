import useTypedSelector from "../../utils/hooks/useTypedSelector";
import CellListItem from "./CellListItem";

import "./cell-list.css";
import AddCell from "./AddCell";
import { Fragment } from "react";

const CellList: React.FC = () => {
  const { data, order } = useTypedSelector((state) => state.cells);

  const renderCells = order.map((id) => (
    <Fragment key={data[id].id}>
      <CellListItem cell={data[id]} />
      <AddCell previousCellId={id} />
    </Fragment>
  ));

  return (
    <div className="cell-list">
      <AddCell forceVisible={order.length === 0} previousCellId={null} />
      {renderCells}
    </div>
  );
};

export default CellList;
