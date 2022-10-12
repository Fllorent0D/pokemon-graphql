import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { type_efficacyCountOrderByAggregateInput } from './type-efficacy-count-order-by-aggregate.input';
import { type_efficacyAvgOrderByAggregateInput } from './type-efficacy-avg-order-by-aggregate.input';
import { type_efficacyMaxOrderByAggregateInput } from './type-efficacy-max-order-by-aggregate.input';
import { type_efficacyMinOrderByAggregateInput } from './type-efficacy-min-order-by-aggregate.input';
import { type_efficacySumOrderByAggregateInput } from './type-efficacy-sum-order-by-aggregate.input';

@InputType()
export class type_efficacyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    damage_type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    target_type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    damage_factor?: keyof typeof SortOrder;

    @Field(() => type_efficacyCountOrderByAggregateInput, {nullable:true})
    _count?: type_efficacyCountOrderByAggregateInput;

    @Field(() => type_efficacyAvgOrderByAggregateInput, {nullable:true})
    _avg?: type_efficacyAvgOrderByAggregateInput;

    @Field(() => type_efficacyMaxOrderByAggregateInput, {nullable:true})
    _max?: type_efficacyMaxOrderByAggregateInput;

    @Field(() => type_efficacyMinOrderByAggregateInput, {nullable:true})
    _min?: type_efficacyMinOrderByAggregateInput;

    @Field(() => type_efficacySumOrderByAggregateInput, {nullable:true})
    _sum?: type_efficacySumOrderByAggregateInput;
}
