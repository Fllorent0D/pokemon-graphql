import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_textSpecies_idVersion_idLanguage_idCompoundUniqueInput } from './pokemon-species-flavor-text-species-id-version-id-language-id-compound-unique.input';

@InputType()
export class pokemon_species_flavor_textWhereUniqueInput {

    @Field(() => pokemon_species_flavor_textSpecies_idVersion_idLanguage_idCompoundUniqueInput, {nullable:true})
    species_id_version_id_language_id?: pokemon_species_flavor_textSpecies_idVersion_idLanguage_idCompoundUniqueInput;
}
