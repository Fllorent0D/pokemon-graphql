import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutPokemon_habitatsInput } from './pokemon-species-create-without-pokemon-habitats.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutPokemon_habitatsInput } from './pokemon-species-create-or-connect-without-pokemon-habitats.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class pokemon_speciesCreateNestedManyWithoutPokemon_habitatsInput {

    @Field(() => [pokemon_speciesCreateWithoutPokemon_habitatsInput], {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutPokemon_habitatsInput)
    create?: Array<pokemon_speciesCreateWithoutPokemon_habitatsInput>;

    @Field(() => [pokemon_speciesCreateOrConnectWithoutPokemon_habitatsInput], {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutPokemon_habitatsInput)
    connectOrCreate?: Array<pokemon_speciesCreateOrConnectWithoutPokemon_habitatsInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: Array<pokemon_speciesWhereUniqueInput>;
}
