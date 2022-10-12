import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_typesCreateWithoutPokemonInput } from './pokemon-types-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { pokemon_typesCreateOrConnectWithoutPokemonInput } from './pokemon-types-create-or-connect-without-pokemon.input';
import { pokemon_typesWhereUniqueInput } from './pokemon-types-where-unique.input';

@InputType()
export class pokemon_typesUncheckedCreateNestedManyWithoutPokemonInput {

    @Field(() => [pokemon_typesCreateWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_typesCreateWithoutPokemonInput)
    create?: Array<pokemon_typesCreateWithoutPokemonInput>;

    @Field(() => [pokemon_typesCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_typesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<pokemon_typesCreateOrConnectWithoutPokemonInput>;

    @Field(() => [pokemon_typesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_typesWhereUniqueInput)
    connect?: Array<pokemon_typesWhereUniqueInput>;
}
