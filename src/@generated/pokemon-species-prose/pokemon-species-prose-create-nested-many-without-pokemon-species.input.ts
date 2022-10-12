import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_proseCreateWithoutPokemon_speciesInput } from './pokemon-species-prose-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_species_proseCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-species-prose-create-or-connect-without-pokemon-species.input';
import { pokemon_species_proseWhereUniqueInput } from './pokemon-species-prose-where-unique.input';

@InputType()
export class pokemon_species_proseCreateNestedManyWithoutPokemon_speciesInput {

    @Field(() => [pokemon_species_proseCreateWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_proseCreateWithoutPokemon_speciesInput)
    create?: Array<pokemon_species_proseCreateWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_proseCreateOrConnectWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_proseCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: Array<pokemon_species_proseCreateOrConnectWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_proseWhereUniqueInput)
    connect?: Array<pokemon_species_proseWhereUniqueInput>;
}
