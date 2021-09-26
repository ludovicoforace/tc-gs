import { useEffect, useState } from "react";
import { fetchFromEndpoint } from "../api";
import { DATA } from "../constants/locations";
import { Data } from "../types";

export default function useGetData() {
  const [data, setData] = useState<Data | null>(null)
  const [errorMessage, setErrorMessage] = useState('')

  async function getData() {
    try {
      const response: Data = await fetchFromEndpoint(DATA)
      setData(response)
    } catch (err: any){
      setErrorMessage(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { data, errorMessage }
}
