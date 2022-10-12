import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesCreateWithoutPokedex_proseInput } from './pokedexes-create-without-pokedex-prose.input';
import { Type } from 'class-transformer';
import { pokedexesCreateOrConnectWithoutPokedex_proseInput } from './pokedexes-create-or-connect-without-pokedex-prose.input';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';

@InputType()
export class pokedexesCreateNestedOneWithoutPokedex_proseInput {

    @Field(() => pokedexesCreateWithoutPokedex_proseInput, {nullable:true})
    @Type(() => pokedexesCreateWithoutPokedex_proseInput)
    create?: pokedexesCreateWithoutPokedex_proseInput;

    @Field(() => pokedexesCreateOrConnectWithoutPokedex_proseInput, {nullable:true})
    @Type(() => pokedexesCreateOrConnectWithoutPokedex_proseInput)
    connectOrCreate?: pokedexesCreateOrConnectWithoutPokedex_proseInput;

    @Field(() => pokedexesWhereUniqueInput, {nullable:true})
    @Type(() => pokedexesWhereUniqueInput)
    connect?: pokedexesWhereUniqueInput;
}
