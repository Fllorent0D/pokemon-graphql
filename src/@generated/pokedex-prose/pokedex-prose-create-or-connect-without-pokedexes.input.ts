import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedex_proseWhereUniqueInput } from './pokedex-prose-where-unique.input';
import { Type } from 'class-transformer';
import { pokedex_proseCreateWithoutPokedexesInput } from './pokedex-prose-create-without-pokedexes.input';

@InputType()
export class pokedex_proseCreateOrConnectWithoutPokedexesInput {

    @Field(() => pokedex_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokedex_proseWhereUniqueInput)
    where!: pokedex_proseWhereUniqueInput;

    @Field(() => pokedex_proseCreateWithoutPokedexesInput, {nullable:false})
    @Type(() => pokedex_proseCreateWithoutPokedexesInput)
    create!: pokedex_proseCreateWithoutPokedexesInput;
}
