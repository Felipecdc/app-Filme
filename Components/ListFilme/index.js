import React from "react";
import {Text} from 'react-native';
import { Container, Title, Image, CardFilme } from "./styles";

function ListFilmes({ data }) {
    return (
        <Container>
            <CardFilme>
                <Image
                    source={{ uri: data.photo }}
                    resizeMode="contain"
                />

                <Title>{data.name}</Title>
            </CardFilme>
        </Container>
    );
}

export default ListFilmes;


