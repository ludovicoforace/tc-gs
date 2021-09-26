import useGetData from "../../hooks/useGetData"

const Promoter = () => {
  const { data, errorMessage } = useGetData()

  if(errorMessage) return <p>{errorMessage}</p>
  if(data == null) return <p>loading...</p>
  const { cash_value } = data

  return (
    <>
      <h1>Get your free £{cash_value} now</h1>
    </>
  )
}

export default Promoter
