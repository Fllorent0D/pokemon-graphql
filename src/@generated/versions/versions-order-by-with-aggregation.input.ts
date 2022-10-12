import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { versionsCountOrderByAggregateInput } from './versions-count-order-by-aggregate.input';
import { versionsAvgOrderByAggregateInput } from './versions-avg-order-by-aggregate.input';
import { versionsMaxOrderByAggregateInput } from './versions-max-order-by-aggregate.input';
import { versionsMinOrderByAggregateInput } from './versions-min-order-by-aggregate.input';
import { versionsSumOrderByAggregateInput } from './versions-sum-order-by-aggregate.input';

@InputType()
export class versionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => versionsCountOrderByAggregateInput, {nullable:true})
    _count?: versionsCountOrderByAggregateInput;

    @Field(() => versionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: versionsAvgOrderByAggregateInput;

    @Field(() => versionsMaxOrderByAggregateInput, {nullable:true})
    _max?: versionsMaxOrderByAggregateInput;

    @Field(() => versionsMinOrderByAggregateInput, {nullable:true})
    _min?: versionsMinOrderByAggregateInput;

    @Field(() => versionsSumOrderByAggregateInput, {nullable:true})
    _sum?: versionsSumOrderByAggregateInput;
}
