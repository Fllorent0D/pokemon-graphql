import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { experienceCountOrderByAggregateInput } from './experience-count-order-by-aggregate.input';
import { experienceAvgOrderByAggregateInput } from './experience-avg-order-by-aggregate.input';
import { experienceMaxOrderByAggregateInput } from './experience-max-order-by-aggregate.input';
import { experienceMinOrderByAggregateInput } from './experience-min-order-by-aggregate.input';
import { experienceSumOrderByAggregateInput } from './experience-sum-order-by-aggregate.input';

@InputType()
export class experienceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    growth_rate_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    level?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    experience?: keyof typeof SortOrder;

    @Field(() => experienceCountOrderByAggregateInput, {nullable:true})
    _count?: experienceCountOrderByAggregateInput;

    @Field(() => experienceAvgOrderByAggregateInput, {nullable:true})
    _avg?: experienceAvgOrderByAggregateInput;

    @Field(() => experienceMaxOrderByAggregateInput, {nullable:true})
    _max?: experienceMaxOrderByAggregateInput;

    @Field(() => experienceMinOrderByAggregateInput, {nullable:true})
    _min?: experienceMinOrderByAggregateInput;

    @Field(() => experienceSumOrderByAggregateInput, {nullable:true})
    _sum?: experienceSumOrderByAggregateInput;
}
