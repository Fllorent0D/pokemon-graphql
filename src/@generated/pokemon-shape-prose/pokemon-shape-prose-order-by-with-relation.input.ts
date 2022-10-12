import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { pokemon_shapesOrderByWithRelationInput } from '../pokemon-shapes/pokemon-shapes-order-by-with-relation.input';

@InputType()
export class pokemon_shape_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_shape_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    awesome_name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => pokemon_shapesOrderByWithRelationInput, {nullable:true})
    pokemon_shapes?: pokemon_shapesOrderByWithRelationInput;
}
