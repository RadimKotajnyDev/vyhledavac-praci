import {useRouter} from "next/navigation";
import {useToast} from "@chakra-ui/react";
import axios from "axios";
import * as Yup from "yup"
import {server_address} from "@/app/configs/apiConfig";
import {useEffect, useState} from "react";

export const useSearchFunctions = () => {
  const router = useRouter()
  const toast = useToast()

  const [oldestYear, setOldestYear] = useState<number>(2000)

  useEffect(() => {
    async function getOldestYear() {
      axios.get(`${server_address}/get-oldest-year`)
        .then(r => setOldestYear(Number(r.data)))
        .catch(e => alert(e))
    }

    getOldestYear()
  }, []);

  function slugify(str: string | undefined): string {

    if (typeof str === "undefined") {
      return ""
    }

    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();

    const charMap: { [key: string]: string } = {
      'á': 'a', 'č': 'c', 'ď': 'd', 'é': 'e', 'ě': 'e', 'í': 'i', 'ň': 'n', 'ó': 'o',
      'ř': 'r', 'š': 's', 'ť': 't', 'ú': 'u', 'ů': 'u', 'ý': 'y', 'ž': 'z'
    };

    str = str.replace(/[^\u0000-\u007E]/g, function (a) {
      return charMap[a] || a;
    });

    str = str.replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
    return str;
  }

  const todayYear = new Date().getFullYear()

  const initialFormValues = {
    obor_stroj: false,
    obor_it: false,
    obor_elektro: false,
    rozmezi_let: [oldestYear, todayYear],
    jmeno_prijmeni: "",
    vedouci: "",
    predmet: "",
    tagy: []
  }

  const validationSchema = Yup.object().shape({
    rozmezi_let: Yup.array().of(
      Yup.number().required('This field is required')
    ).test(
      'is-lesser',
      'First value must be lower than the second one',
      values => {
        if (values && Array.isArray(values) && values.length >= 2) {
          return values[0] < values[1];
        }
        return true; // If values are undefined or don't meet criteria, validation passes
      }
    )
  });

  function onKeyDown(keyEvent: any) {
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
      autor: values.autor,
      predmet: values.predmet,
      vedouci: values.vedouci,
      tagy: values.tagy
    }
  }

  function getAllPrace() {
    axios.get(`${server_address}/load-page/1`)
      .then(r => {
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
  /*
  function getPraceFromPage(input: number) {
    axios.get(`${server_address}/load-page/${input}`)
      .then(r => {
        const oldData = sessionStorage.getItem('apiData');
        if (oldData) {
          const parsedOldData = JSON.parse(oldData)
          const newData = r.data
          const updatedData = parsedOldData.concat(newData)
          sessionStorage.setItem('apiData', JSON.stringify(updatedData));
        }
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
   */

  async function getPraceFromPage(input: number) {
    try {
      const response = await axios.get(`${server_address}/load-page/${input}`);
      return response.data;
    } catch (error: any) {
      throw new Error(`Chyba při načítání dat ze stránky ${input}: ${error.message}`);
    }
  }

  function sendSearch(value: string) {
    axios.post(`${server_address}/search`, null, {params: {vyraz: value}})
      .then(r => {
        //console.log(r)
        //setAPIData(r.data)
        //sessionStorage.setItem('apiData', JSON.stringify(r.data));
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
    validationSchema,
    router,
    slugify,
    onKeyDown,
    sendSearch,
    sendFilter,
    getAllPrace,
    getPraceFromPage
  }
}