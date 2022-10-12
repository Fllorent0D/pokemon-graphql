import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { version_namesCountOrderByAggregateInput } from './version-names-count-order-by-aggregate.input';
import { version_namesAvgOrderByAggregateInput } from './version-names-avg-order-by-aggregate.input';
import { version_namesMaxOrderByAggregateInput } from './version-names-max-order-by-aggregate.input';
import { version_namesMinOrderByAggregateInput } from './version-names-min-order-by-aggregate.input';
import { version_namesSumOrderByAggregateInput } from './version-names-sum-order-by-aggregate.input';

@InputType()
export class version_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    version_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => version_namesCountOrderByAggregateInput, {nullable:true})
    _count?: version_namesCountOrderByAggregateInput;

    @Field(() => version_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: version_namesAvgOrderByAggregateInput;

    @Field(() => version_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: version_namesMaxOrderByAggregateInput;

    @Field(() => version_namesMinOrderByAggregateInput, {nullable:true})
    _min?: version_namesMinOrderByAggregateInput;

    @Field(() => version_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: version_namesSumOrderByAggregateInput;
}
