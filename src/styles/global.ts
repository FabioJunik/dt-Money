import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --backgroung: #F0F2F5;
        --red:#E62E4D;
        --blue:#5429CC;
        --green:#33CC95;

        --blue-light:#6933FF;
        
        --text-title:#363F5F;
        --text-body:#969C83;
        --shape:#FFFFFF;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(--backgroung);
        -webkit-font-smoothing:antialiased;
    }

    body, input, textarea, button{
        font-family:'Poppins', sans-serif;
        font-weight:400;
    }

    h1,h2,h3,h4,h5,h6,strong{
        font-weight:600;
    }

    html{
        @media (max-width:1888px){
            font-size: 93.75%;
        }
        
        @media (max-width: 728px){
            font-size: 87.5%;
        }       
    }

    button{
        cursor: pointer;
    }
    
    [disabled]{
        opacity: .6;
        cursor: not-allowed;
    }
`;