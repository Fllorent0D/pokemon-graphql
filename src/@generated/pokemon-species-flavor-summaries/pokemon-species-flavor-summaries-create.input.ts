import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokemon_species_flavor_summariesInput } from '../languages/languages-create-nested-one-without-pokemon-species-flavor-summaries.input';
import { pokemon_speciesCreateNestedOneWithoutPokemon_species_flavor_summariesInput } from '../pokemon-species/pokemon-species-create-nested-one-without-pokemon-species-flavor-summaries.input';

@InputType()
export class pokemon_species_flavor_summariesCreateInput {

    @Field(() => String, {nullable:true})
    flavor_summary?: string;

    @Field(() => languagesCreateNestedOneWithoutPokemon_species_flavor_summariesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokemon_species_flavor_summariesInput;

    @Field(() => pokemon_speciesCreateNestedOneWithoutPokemon_species_flavor_summariesInput, {nullable:false})
    pokemon_species!: pokemon_speciesCreateNestedOneWithoutPokemon_species_flavor_summariesInput;
}
