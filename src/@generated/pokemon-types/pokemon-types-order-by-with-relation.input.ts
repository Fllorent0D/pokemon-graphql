import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { typesOrderByWithRelationInput } from '../types/types-order-by-with-relation.input';
import { pokemonOrderByWithRelationInput } from '../pokemon/pokemon-order-by-with-relation.input';

@InputType()
export class pokemon_typesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slot?: keyof typeof SortOrder;

    @Field(() => typesOrderByWithRelationInput, {nullable:true})
    types?: typesOrderByWithRelationInput;

    @Field(() => pokemonOrderByWithRelationInput, {nullable:true})
    pokemon?: pokemonOrderByWithRelationInput;
}
