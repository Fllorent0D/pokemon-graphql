import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateNestedOneWithoutPokemon_species_flavor_summariesInput } from '../pokemon-species/pokemon-species-create-nested-one-without-pokemon-species-flavor-summaries.input';

@InputType()
export class pokemon_species_flavor_summariesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    flavor_summary?: string;

    @Field(() => pokemon_speciesCreateNestedOneWithoutPokemon_species_flavor_summariesInput, {nullable:false})
    pokemon_species!: pokemon_speciesCreateNestedOneWithoutPokemon_species_flavor_summariesInput;
}
