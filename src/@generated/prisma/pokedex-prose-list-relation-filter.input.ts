import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedex_proseWhereInput } from '../pokedex-prose/pokedex-prose-where.input';

@InputType()
export class Pokedex_proseListRelationFilter {

    @Field(() => pokedex_proseWhereInput, {nullable:true})
    every?: pokedex_proseWhereInput;

    @Field(() => pokedex_proseWhereInput, {nullable:true})
    some?: pokedex_proseWhereInput;

    @Field(() => pokedex_proseWhereInput, {nullable:true})
    none?: pokedex_proseWhereInput;
}
