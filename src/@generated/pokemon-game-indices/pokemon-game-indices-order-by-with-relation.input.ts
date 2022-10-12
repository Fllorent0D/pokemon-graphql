import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { generationsOrderByWithRelationInput } from '../generations/generations-order-by-with-relation.input';
import { pokemonOrderByWithRelationInput } from '../pokemon/pokemon-order-by-with-relation.input';

@InputType()
export class pokemon_game_indicesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_index?: keyof typeof SortOrder;

    @Field(() => generationsOrderByWithRelationInput, {nullable:true})
    generations?: generationsOrderByWithRelationInput;

    @Field(() => pokemonOrderByWithRelationInput, {nullable:true})
    pokemon?: pokemonOrderByWithRelationInput;
}
