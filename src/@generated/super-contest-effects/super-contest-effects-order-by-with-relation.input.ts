import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { movesOrderByRelationAggregateInput } from '../moves/moves-order-by-relation-aggregate.input';
import { super_contest_effect_proseOrderByRelationAggregateInput } from '../super-contest-effect-prose/super-contest-effect-prose-order-by-relation-aggregate.input';

@InputType()
export class super_contest_effectsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => movesOrderByRelationAggregateInput, {nullable:true})
    moves?: movesOrderByRelationAggregateInput;

    @Field(() => super_contest_effect_proseOrderByRelationAggregateInput, {nullable:true})
    super_contest_effect_prose?: super_contest_effect_proseOrderByRelationAggregateInput;
}
