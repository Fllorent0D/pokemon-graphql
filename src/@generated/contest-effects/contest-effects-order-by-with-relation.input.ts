import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { contest_effect_proseOrderByRelationAggregateInput } from '../contest-effect-prose/contest-effect-prose-order-by-relation-aggregate.input';
import { movesOrderByRelationAggregateInput } from '../moves/moves-order-by-relation-aggregate.input';

@InputType()
export class contest_effectsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => contest_effect_proseOrderByRelationAggregateInput, {nullable:true})
    contest_effect_prose?: contest_effect_proseOrderByRelationAggregateInput;

    @Field(() => movesOrderByRelationAggregateInput, {nullable:true})
    moves?: movesOrderByRelationAggregateInput;
}
