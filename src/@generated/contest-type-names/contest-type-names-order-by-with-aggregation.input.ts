import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { contest_type_namesCountOrderByAggregateInput } from './contest-type-names-count-order-by-aggregate.input';
import { contest_type_namesAvgOrderByAggregateInput } from './contest-type-names-avg-order-by-aggregate.input';
import { contest_type_namesMaxOrderByAggregateInput } from './contest-type-names-max-order-by-aggregate.input';
import { contest_type_namesMinOrderByAggregateInput } from './contest-type-names-min-order-by-aggregate.input';
import { contest_type_namesSumOrderByAggregateInput } from './contest-type-names-sum-order-by-aggregate.input';

@InputType()
export class contest_type_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    contest_type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => contest_type_namesCountOrderByAggregateInput, {nullable:true})
    _count?: contest_type_namesCountOrderByAggregateInput;

    @Field(() => contest_type_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: contest_type_namesAvgOrderByAggregateInput;

    @Field(() => contest_type_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: contest_type_namesMaxOrderByAggregateInput;

    @Field(() => contest_type_namesMinOrderByAggregateInput, {nullable:true})
    _min?: contest_type_namesMinOrderByAggregateInput;

    @Field(() => contest_type_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: contest_type_namesSumOrderByAggregateInput;
}
