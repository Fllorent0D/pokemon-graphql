import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_itemsCreateWithoutPokemonInput } from './pokemon-items-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { pokemon_itemsCreateOrConnectWithoutPokemonInput } from './pokemon-items-create-or-connect-without-pokemon.input';
import { pokemon_itemsWhereUniqueInput } from './pokemon-items-where-unique.input';

@InputType()
export class pokemon_itemsUncheckedCreateNestedManyWithoutPokemonInput {

    @Field(() => [pokemon_itemsCreateWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_itemsCreateWithoutPokemonInput)
    create?: Array<pokemon_itemsCreateWithoutPokemonInput>;

    @Field(() => [pokemon_itemsCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_itemsCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<pokemon_itemsCreateOrConnectWithoutPokemonInput>;

    @Field(() => [pokemon_itemsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_itemsWhereUniqueInput)
    connect?: Array<pokemon_itemsWhereUniqueInput>;
}
