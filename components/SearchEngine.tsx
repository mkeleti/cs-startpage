import {NextPage} from "next";
import {Container, TextInput} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";

interface PropTypes {
    engine: string
}

const SearchEngine: NextPage = (Props:PropTypes) => {
    let link: string;
    switch (Props.engine) {
        case "Google":
            link = "https://www.google.com/search?q=";
            break;
        case "Bing":
            link = "https://www.bing.com/search?q=";
            break;
        case "DuckDuckGo":
            link = "https://duckduckgo.com/?q=";
            break;
        case "Yahoo":
            link = "https://search.yahoo.com/search?p=";
            break;
        default:
            link = "https://www.google.com/search?q=";
    }
    const form = useForm({
        initialValues: { search: "" }
    })
    const router = useRouter();
  return (
    <Container>
        <form onSubmit={form.onSubmit((values) => router.push(`${link}${values.search}`))}>
            <TextInput size={"xl"} with="xl" placeholder="Search Query" {...form.getInputProps('search')}/>
        </form>
    </Container>
  );
}

export default SearchEngine;
