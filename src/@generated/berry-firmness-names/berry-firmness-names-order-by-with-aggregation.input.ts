import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { berry_firmness_namesCountOrderByAggregateInput } from './berry-firmness-names-count-order-by-aggregate.input';
import { berry_firmness_namesAvgOrderByAggregateInput } from './berry-firmness-names-avg-order-by-aggregate.input';
import { berry_firmness_namesMaxOrderByAggregateInput } from './berry-firmness-names-max-order-by-aggregate.input';
import { berry_firmness_namesMinOrderByAggregateInput } from './berry-firmness-names-min-order-by-aggregate.input';
import { berry_firmness_namesSumOrderByAggregateInput } from './berry-firmness-names-sum-order-by-aggregate.input';

@InputType()
export class berry_firmness_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    berry_firmness_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => berry_firmness_namesCountOrderByAggregateInput, {nullable:true})
    _count?: berry_firmness_namesCountOrderByAggregateInput;

    @Field(() => berry_firmness_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: berry_firmness_namesAvgOrderByAggregateInput;

    @Field(() => berry_firmness_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: berry_firmness_namesMaxOrderByAggregateInput;

    @Field(() => berry_firmness_namesMinOrderByAggregateInput, {nullable:true})
    _min?: berry_firmness_namesMinOrderByAggregateInput;

    @Field(() => berry_firmness_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: berry_firmness_namesSumOrderByAggregateInput;
}
