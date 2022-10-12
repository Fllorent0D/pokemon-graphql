import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { contest_typesCountOrderByAggregateInput } from './contest-types-count-order-by-aggregate.input';
import { contest_typesAvgOrderByAggregateInput } from './contest-types-avg-order-by-aggregate.input';
import { contest_typesMaxOrderByAggregateInput } from './contest-types-max-order-by-aggregate.input';
import { contest_typesMinOrderByAggregateInput } from './contest-types-min-order-by-aggregate.input';
import { contest_typesSumOrderByAggregateInput } from './contest-types-sum-order-by-aggregate.input';

@InputType()
export class contest_typesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => contest_typesCountOrderByAggregateInput, {nullable:true})
    _count?: contest_typesCountOrderByAggregateInput;

    @Field(() => contest_typesAvgOrderByAggregateInput, {nullable:true})
    _avg?: contest_typesAvgOrderByAggregateInput;

    @Field(() => contest_typesMaxOrderByAggregateInput, {nullable:true})
    _max?: contest_typesMaxOrderByAggregateInput;

    @Field(() => contest_typesMinOrderByAggregateInput, {nullable:true})
    _min?: contest_typesMinOrderByAggregateInput;

    @Field(() => contest_typesSumOrderByAggregateInput, {nullable:true})
    _sum?: contest_typesSumOrderByAggregateInput;
}
