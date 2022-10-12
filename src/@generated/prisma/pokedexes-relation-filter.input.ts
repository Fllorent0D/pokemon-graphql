import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesWhereInput } from '../pokedexes/pokedexes-where.input';

@InputType()
export class PokedexesRelationFilter {

    @Field(() => pokedexesWhereInput, {nullable:true})
    is?: pokedexesWhereInput;

    @Field(() => pokedexesWhereInput, {nullable:true})
    isNot?: pokedexesWhereInput;
}
