import { Container, Divider, ImageList, ImageListItem, Link, Stack } from "@mui/material";
import { FC } from "react";import { filmsPayloadResponse } from "../../../services/films/FilmsService";
import { speciesPayloadResponse } from "../../../services/species/SpeciesService";

export type CardSpeciesProps = {
    species: speciesPayloadResponse
}

const CardSpecies: FC<CardSpeciesProps> = ({species}) => {
    return (
        <Stack direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={10} className="actor" alignItems={'center'} padding={5}>
              <h3>{species.name}</h3>
              <Container>
                <div>
                  <p >classification: {species.classification}</p>
                  <p >designation: {species.designation}</p>
                  <p >average height: {species.average_height}</p>
                  <p >skin colors: {species.skin_colors}</p>
                  <p >language: {species.language}</p>
                </div>
                <div>
                  <p >hair colors: {species.hair_colors}</p>
                  <p >eye colors: {species.eye_colors}</p>
                  <p >average lifespan: {species.average_lifespan}</p>
                  
                </div>
              </Container>
              <div>
                <img
                    src= {`https://starwars-visualguide.com/assets/img/species/${(species.url).replace(/[^0-9]/g,'')}.jpg`}
                    width={500} height={450} 
                    alt={species.name}
                />
              </div>
              <div className="section">
                {
                species.people.length > 0 && (
                    <>
                    <h3>CARACTERS</h3>
                    <ImageList cols={4}>
                        {species.people.map((characters:string)=>
                        <Link href={'/people/'+ (characters).replace(/[^0-9]/g,'')} key={characters}>
                            <ImageListItem key={characters} >
                                <img
                                src= {`https://starwars-visualguide.com/assets/img/characters/${(characters).replace(/[^0-9]/g,'')}.jpg`}
                                width={50} height={50}/>
                            </ImageListItem> 
                        </Link>
                        )}       
                    </ImageList>
                    </>
                )}
                {
                species.films.length > 0 && (
                    <>
                    <h3>FILMS</h3>
                    <ImageList cols={4}>
                        {species.films.map((films:string)=>
                        <Link href={'/films/'+ (films).replace(/[^0-9]/g,'')} key={films}>
                            <ImageListItem key={films} >
                                <img
                                src= {`https://starwars-visualguide.com/assets/img/films/${(films).replace(/[^0-9]/g,'')}.jpg`}
                                width={50} height={50}/>
                            </ImageListItem> 
                        </Link>
                        )}       
                    </ImageList>
                    </>
                )}
                </div>
        </Stack>
        
)
}
export default CardSpecies;