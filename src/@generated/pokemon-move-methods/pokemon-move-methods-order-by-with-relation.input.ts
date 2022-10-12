import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_move_method_proseOrderByRelationAggregateInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-order-by-relation-aggregate.input';

@InputType()
export class pokemon_move_methodsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => pokemon_move_method_proseOrderByRelationAggregateInput, {nullable:true})
    pokemon_move_method_prose?: pokemon_move_method_proseOrderByRelationAggregateInput;
}
