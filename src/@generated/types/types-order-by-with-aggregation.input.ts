import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { typesCountOrderByAggregateInput } from './types-count-order-by-aggregate.input';
import { typesAvgOrderByAggregateInput } from './types-avg-order-by-aggregate.input';
import { typesMaxOrderByAggregateInput } from './types-max-order-by-aggregate.input';
import { typesMinOrderByAggregateInput } from './types-min-order-by-aggregate.input';
import { typesSumOrderByAggregateInput } from './types-sum-order-by-aggregate.input';

@InputType()
export class typesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    damage_class_id?: keyof typeof SortOrder;

    @Field(() => typesCountOrderByAggregateInput, {nullable:true})
    _count?: typesCountOrderByAggregateInput;

    @Field(() => typesAvgOrderByAggregateInput, {nullable:true})
    _avg?: typesAvgOrderByAggregateInput;

    @Field(() => typesMaxOrderByAggregateInput, {nullable:true})
    _max?: typesMaxOrderByAggregateInput;

    @Field(() => typesMinOrderByAggregateInput, {nullable:true})
    _min?: typesMinOrderByAggregateInput;

    @Field(() => typesSumOrderByAggregateInput, {nullable:true})
    _sum?: typesSumOrderByAggregateInput;
}
