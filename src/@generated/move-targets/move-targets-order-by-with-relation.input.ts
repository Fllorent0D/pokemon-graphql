import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_target_proseOrderByRelationAggregateInput } from '../move-target-prose/move-target-prose-order-by-relation-aggregate.input';
import { movesOrderByRelationAggregateInput } from '../moves/moves-order-by-relation-aggregate.input';

@InputType()
export class move_targetsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => move_target_proseOrderByRelationAggregateInput, {nullable:true})
    move_target_prose?: move_target_proseOrderByRelationAggregateInput;

    @Field(() => movesOrderByRelationAggregateInput, {nullable:true})
    moves?: movesOrderByRelationAggregateInput;
}
