const MyServicesCard = ({ order, handleConfirm }) => {
  const { _id, service_id, serviceName, date, price, status } = order;

  return (
    <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
      <td className="p-3">
        <p>{service_id}</p>
      </td>
      <td className="p-3">
        <p>{serviceName}</p>
      </td>
      <td className="p-3">
        <p>{date}</p>
      </td>
      <td className="p-3">
        <p>{price}</p>
      </td>
      <td className="p-3">
        <p>$15,792</p>
      </td>
      <td className="p-3">
        <span className="font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
          {status === "confirm" ? (
            <span className="text-primary">Confirm</span>
          ) : (
            <span
              className="btn bg-warning text-white"
              onClick={() => handleConfirm(_id)}
            >
              Confirm
            </span>
          )}
        </span>
      </td>
    </tr>
  );
};

export default MyServicesCard;
