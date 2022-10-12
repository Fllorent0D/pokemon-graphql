import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_damage_class_proseCountOrderByAggregateInput } from './move-damage-class-prose-count-order-by-aggregate.input';
import { move_damage_class_proseAvgOrderByAggregateInput } from './move-damage-class-prose-avg-order-by-aggregate.input';
import { move_damage_class_proseMaxOrderByAggregateInput } from './move-damage-class-prose-max-order-by-aggregate.input';
import { move_damage_class_proseMinOrderByAggregateInput } from './move-damage-class-prose-min-order-by-aggregate.input';
import { move_damage_class_proseSumOrderByAggregateInput } from './move-damage-class-prose-sum-order-by-aggregate.input';

@InputType()
export class move_damage_class_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_damage_class_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => move_damage_class_proseCountOrderByAggregateInput, {nullable:true})
    _count?: move_damage_class_proseCountOrderByAggregateInput;

    @Field(() => move_damage_class_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_damage_class_proseAvgOrderByAggregateInput;

    @Field(() => move_damage_class_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: move_damage_class_proseMaxOrderByAggregateInput;

    @Field(() => move_damage_class_proseMinOrderByAggregateInput, {nullable:true})
    _min?: move_damage_class_proseMinOrderByAggregateInput;

    @Field(() => move_damage_class_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: move_damage_class_proseSumOrderByAggregateInput;
}
