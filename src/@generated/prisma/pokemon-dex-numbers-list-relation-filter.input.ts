import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_dex_numbersWhereInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-where.input';

@InputType()
export class Pokemon_dex_numbersListRelationFilter {

    @Field(() => pokemon_dex_numbersWhereInput, {nullable:true})
    every?: pokemon_dex_numbersWhereInput;

    @Field(() => pokemon_dex_numbersWhereInput, {nullable:true})
    some?: pokemon_dex_numbersWhereInput;

    @Field(() => pokemon_dex_numbersWhereInput, {nullable:true})
    none?: pokemon_dex_numbersWhereInput;
}
