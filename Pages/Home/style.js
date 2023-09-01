import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1
`;

export const TopFilmes = styled.View`
    width: 100%;
    background-color: #660202;
`;

export const LabelTop = styled.View`
    width: 100%;
    background-color: #353535
`;

export const TitleTop = styled.Text`
    color: #ddd;
    font-size: 22px;
    font-weight: bold;
    margin-left: 10px;
    padding-vertical: 10px
`;

export const List = styled.FlatList`

`;

export const AreaFilmeList = styled.View`
    width: 100%;
    background-color: #191919
`;

export const LabelTitle = styled.View`
    width: 100%;
    background-color: #282828
`;

export const Title = styled.Text`
    color: #ddd;
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    padding-vertical: 10px
`;

