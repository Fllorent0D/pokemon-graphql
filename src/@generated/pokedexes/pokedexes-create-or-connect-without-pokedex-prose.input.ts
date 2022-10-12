import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Type } from 'class-transformer';
import { pokedexesCreateWithoutPokedex_proseInput } from './pokedexes-create-without-pokedex-prose.input';

@InputType()
export class pokedexesCreateOrConnectWithoutPokedex_proseInput {

    @Field(() => pokedexesWhereUniqueInput, {nullable:false})
    @Type(() => pokedexesWhereUniqueInput)
    where!: pokedexesWhereUniqueInput;

    @Field(() => pokedexesCreateWithoutPokedex_proseInput, {nullable:false})
    @Type(() => pokedexesCreateWithoutPokedex_proseInput)
    create!: pokedexesCreateWithoutPokedex_proseInput;
}
