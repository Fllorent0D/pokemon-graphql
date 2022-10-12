import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesCreateWithoutPokedex_proseInput } from './pokedexes-create-without-pokedex-prose.input';
import { Type } from 'class-transformer';
import { pokedexesCreateOrConnectWithoutPokedex_proseInput } from './pokedexes-create-or-connect-without-pokedex-prose.input';
import { pokedexesUpsertWithoutPokedex_proseInput } from './pokedexes-upsert-without-pokedex-prose.input';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { pokedexesUpdateWithoutPokedex_proseInput } from './pokedexes-update-without-pokedex-prose.input';

@InputType()
export class pokedexesUpdateOneRequiredWithoutPokedex_proseNestedInput {

    @Field(() => pokedexesCreateWithoutPokedex_proseInput, {nullable:true})
    @Type(() => pokedexesCreateWithoutPokedex_proseInput)
    create?: pokedexesCreateWithoutPokedex_proseInput;

    @Field(() => pokedexesCreateOrConnectWithoutPokedex_proseInput, {nullable:true})
    @Type(() => pokedexesCreateOrConnectWithoutPokedex_proseInput)
    connectOrCreate?: pokedexesCreateOrConnectWithoutPokedex_proseInput;

    @Field(() => pokedexesUpsertWithoutPokedex_proseInput, {nullable:true})
    @Type(() => pokedexesUpsertWithoutPokedex_proseInput)
    upsert?: pokedexesUpsertWithoutPokedex_proseInput;

    @Field(() => pokedexesWhereUniqueInput, {nullable:true})
    @Type(() => pokedexesWhereUniqueInput)
    connect?: pokedexesWhereUniqueInput;

    @Field(() => pokedexesUpdateWithoutPokedex_proseInput, {nullable:true})
    @Type(() => pokedexesUpdateWithoutPokedex_proseInput)
    update?: pokedexesUpdateWithoutPokedex_proseInput;
}
