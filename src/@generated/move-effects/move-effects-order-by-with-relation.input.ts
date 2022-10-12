import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_changelogOrderByRelationAggregateInput } from '../move-changelog/move-changelog-order-by-relation-aggregate.input';
import { move_effect_changelogOrderByRelationAggregateInput } from '../move-effect-changelog/move-effect-changelog-order-by-relation-aggregate.input';
import { move_effect_proseOrderByRelationAggregateInput } from '../move-effect-prose/move-effect-prose-order-by-relation-aggregate.input';
import { movesOrderByRelationAggregateInput } from '../moves/moves-order-by-relation-aggregate.input';

@InputType()
export class move_effectsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => move_changelogOrderByRelationAggregateInput, {nullable:true})
    move_changelog?: move_changelogOrderByRelationAggregateInput;

    @Field(() => move_effect_changelogOrderByRelationAggregateInput, {nullable:true})
    move_effect_changelog?: move_effect_changelogOrderByRelationAggregateInput;

    @Field(() => move_effect_proseOrderByRelationAggregateInput, {nullable:true})
    move_effect_prose?: move_effect_proseOrderByRelationAggregateInput;

    @Field(() => movesOrderByRelationAggregateInput, {nullable:true})
    moves?: movesOrderByRelationAggregateInput;
}
