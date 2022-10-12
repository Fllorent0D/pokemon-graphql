import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedex_proseWhereUniqueInput } from './pokedex-prose-where-unique.input';
import { Type } from 'class-transformer';
import { pokedex_proseUpdateWithoutPokedexesInput } from './pokedex-prose-update-without-pokedexes.input';

@InputType()
export class pokedex_proseUpdateWithWhereUniqueWithoutPokedexesInput {

    @Field(() => pokedex_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokedex_proseWhereUniqueInput)
    where!: pokedex_proseWhereUniqueInput;

    @Field(() => pokedex_proseUpdateWithoutPokedexesInput, {nullable:false})
    @Type(() => pokedex_proseUpdateWithoutPokedexesInput)
    data!: pokedex_proseUpdateWithoutPokedexesInput;
}
