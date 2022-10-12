import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesWhereInput } from '../pokedexes/pokedexes-where.input';

@InputType()
export class PokedexesListRelationFilter {

    @Field(() => pokedexesWhereInput, {nullable:true})
    every?: pokedexesWhereInput;

    @Field(() => pokedexesWhereInput, {nullable:true})
    some?: pokedexesWhereInput;

    @Field(() => pokedexesWhereInput, {nullable:true})
    none?: pokedexesWhereInput;
}
