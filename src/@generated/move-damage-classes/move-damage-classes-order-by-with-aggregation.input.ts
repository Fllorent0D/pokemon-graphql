import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_damage_classesCountOrderByAggregateInput } from './move-damage-classes-count-order-by-aggregate.input';
import { move_damage_classesAvgOrderByAggregateInput } from './move-damage-classes-avg-order-by-aggregate.input';
import { move_damage_classesMaxOrderByAggregateInput } from './move-damage-classes-max-order-by-aggregate.input';
import { move_damage_classesMinOrderByAggregateInput } from './move-damage-classes-min-order-by-aggregate.input';
import { move_damage_classesSumOrderByAggregateInput } from './move-damage-classes-sum-order-by-aggregate.input';

@InputType()
export class move_damage_classesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => move_damage_classesCountOrderByAggregateInput, {nullable:true})
    _count?: move_damage_classesCountOrderByAggregateInput;

    @Field(() => move_damage_classesAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_damage_classesAvgOrderByAggregateInput;

    @Field(() => move_damage_classesMaxOrderByAggregateInput, {nullable:true})
    _max?: move_damage_classesMaxOrderByAggregateInput;

    @Field(() => move_damage_classesMinOrderByAggregateInput, {nullable:true})
    _min?: move_damage_classesMinOrderByAggregateInput;

    @Field(() => move_damage_classesSumOrderByAggregateInput, {nullable:true})
    _sum?: move_damage_classesSumOrderByAggregateInput;
}
