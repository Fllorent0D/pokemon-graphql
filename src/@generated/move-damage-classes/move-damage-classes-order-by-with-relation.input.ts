import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_damage_class_proseOrderByRelationAggregateInput } from '../move-damage-class-prose/move-damage-class-prose-order-by-relation-aggregate.input';
import { movesOrderByRelationAggregateInput } from '../moves/moves-order-by-relation-aggregate.input';
import { statsOrderByRelationAggregateInput } from '../stats/stats-order-by-relation-aggregate.input';
import { typesOrderByRelationAggregateInput } from '../types/types-order-by-relation-aggregate.input';

@InputType()
export class move_damage_classesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => move_damage_class_proseOrderByRelationAggregateInput, {nullable:true})
    move_damage_class_prose?: move_damage_class_proseOrderByRelationAggregateInput;

    @Field(() => movesOrderByRelationAggregateInput, {nullable:true})
    moves?: movesOrderByRelationAggregateInput;

    @Field(() => statsOrderByRelationAggregateInput, {nullable:true})
    stats?: statsOrderByRelationAggregateInput;

    @Field(() => typesOrderByRelationAggregateInput, {nullable:true})
    types?: typesOrderByRelationAggregateInput;
}
