import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_textCreateWithoutPokemon_speciesInput } from './pokemon-species-flavor-text-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_textCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-species-flavor-text-create-or-connect-without-pokemon-species.input';
import { pokemon_species_flavor_textWhereUniqueInput } from './pokemon-species-flavor-text-where-unique.input';

@InputType()
export class pokemon_species_flavor_textCreateNestedManyWithoutPokemon_speciesInput {

    @Field(() => [pokemon_species_flavor_textCreateWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textCreateWithoutPokemon_speciesInput)
    create?: Array<pokemon_species_flavor_textCreateWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_flavor_textCreateOrConnectWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: Array<pokemon_species_flavor_textCreateOrConnectWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    connect?: Array<pokemon_species_flavor_textWhereUniqueInput>;
}
