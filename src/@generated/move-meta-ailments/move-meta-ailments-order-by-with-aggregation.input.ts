import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_meta_ailmentsCountOrderByAggregateInput } from './move-meta-ailments-count-order-by-aggregate.input';
import { move_meta_ailmentsAvgOrderByAggregateInput } from './move-meta-ailments-avg-order-by-aggregate.input';
import { move_meta_ailmentsMaxOrderByAggregateInput } from './move-meta-ailments-max-order-by-aggregate.input';
import { move_meta_ailmentsMinOrderByAggregateInput } from './move-meta-ailments-min-order-by-aggregate.input';
import { move_meta_ailmentsSumOrderByAggregateInput } from './move-meta-ailments-sum-order-by-aggregate.input';

@InputType()
export class move_meta_ailmentsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => move_meta_ailmentsCountOrderByAggregateInput, {nullable:true})
    _count?: move_meta_ailmentsCountOrderByAggregateInput;

    @Field(() => move_meta_ailmentsAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_meta_ailmentsAvgOrderByAggregateInput;

    @Field(() => move_meta_ailmentsMaxOrderByAggregateInput, {nullable:true})
    _max?: move_meta_ailmentsMaxOrderByAggregateInput;

    @Field(() => move_meta_ailmentsMinOrderByAggregateInput, {nullable:true})
    _min?: move_meta_ailmentsMinOrderByAggregateInput;

    @Field(() => move_meta_ailmentsSumOrderByAggregateInput, {nullable:true})
    _sum?: move_meta_ailmentsSumOrderByAggregateInput;
}
