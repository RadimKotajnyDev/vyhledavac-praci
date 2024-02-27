import {useRouter} from "next/navigation";
import {useToast} from "@chakra-ui/react";
import axios from "axios";

export const useSearchModal = () => {
  const router = useRouter()
  const toast = useToast()

  const initialFormValues = {
    obor_stroj: false,
    obor_it: false,
    obor_elektro: false,
    rozmezi_let: [2000, 2024],
    vedouci: "",
    predmet: "",
    tagy: []
  }

  const server_address = "http://127.0.0.1:8000"

  function onKeyDown(keyEvent: KeyboardEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
        keyEvent.preventDefault();
    }
}



  function handlePostValues(values: any) {

    const obor_array = []
    values.obor_stroj ? obor_array.push("stroj") : null
    values.obor_it ? obor_array.push("it") : null
    values.obor_elektro ? obor_array.push("elektro") : null

    return {
      obor: obor_array,
      pocatecni_rok: Number(values.rozmezi_let[0]),
      koncovy_rok: Number(values.rozmezi_let[1]),
      predmet: values.predmet,
      vedouci: values.vedouci,
      tagy: values.tagy
    }
  }

  function sendSearch(value: string) {
    axios.post(`${server_address}/search`, null, {params: {vyraz: value}})
      .then(r => {
        //console.log(r)
        //setAPIData(r.data)
        sessionStorage.setItem('apiData', JSON.stringify(r.data));
      })
      .catch(e => toast({
        title: e,
        status: "error",
        isClosable: true,
      }))
      .then(() => {
        toast({
          title: "Vyhledání proběhlo úspěšně.",
          status: "success",
          duration: 2000,
          isClosable: true,
        })
        router.push("/vyhledane-prace")
      })
  }

  function sendFilter(values: any) {
    axios.post(`${server_address}/search-by-filter`, handlePostValues(values))
      .then(r => {
        //console.log(r)
        //setAPIData(r.data)
        sessionStorage.setItem('apiData', JSON.stringify(r.data));
      })
      .catch((e) => toast({
        title: e,
        status: "error",
        isClosable: true,
      })).then(() => {
      toast({
        title: "Vyhledání proběhlo úspěšně.",
        status: "success",
        duration: 2000,
        isClosable: true,
      })
      router.push("/vyhledane-prace")
    })
    //console.log(handlePostValues(values))
  }

  return {
    initialFormValues,
    onKeyDown,
    sendSearch,
    sendFilter,
  }
}