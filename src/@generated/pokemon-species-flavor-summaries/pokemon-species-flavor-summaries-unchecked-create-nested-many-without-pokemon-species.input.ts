import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesCreateWithoutPokemon_speciesInput } from './pokemon-species-flavor-summaries-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_summariesCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-species-flavor-summaries-create-or-connect-without-pokemon-species.input';
import { pokemon_species_flavor_summariesWhereUniqueInput } from './pokemon-species-flavor-summaries-where-unique.input';

@InputType()
export class pokemon_species_flavor_summariesUncheckedCreateNestedManyWithoutPokemon_speciesInput {

    @Field(() => [pokemon_species_flavor_summariesCreateWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesCreateWithoutPokemon_speciesInput)
    create?: Array<pokemon_species_flavor_summariesCreateWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_flavor_summariesCreateOrConnectWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: Array<pokemon_species_flavor_summariesCreateOrConnectWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesWhereUniqueInput)
    connect?: Array<pokemon_species_flavor_summariesWhereUniqueInput>;
}
