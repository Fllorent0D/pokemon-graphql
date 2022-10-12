import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_shape_proseOrderByRelationAggregateInput } from '../pokemon-shape-prose/pokemon-shape-prose-order-by-relation-aggregate.input';
import { pokemon_speciesOrderByRelationAggregateInput } from '../pokemon-species/pokemon-species-order-by-relation-aggregate.input';

@InputType()
export class pokemon_shapesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => pokemon_shape_proseOrderByRelationAggregateInput, {nullable:true})
    pokemon_shape_prose?: pokemon_shape_proseOrderByRelationAggregateInput;

    @Field(() => pokemon_speciesOrderByRelationAggregateInput, {nullable:true})
    pokemon_species?: pokemon_speciesOrderByRelationAggregateInput;
}
