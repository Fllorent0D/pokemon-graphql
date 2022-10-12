import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_meta_ailment_namesCountOrderByAggregateInput } from './move-meta-ailment-names-count-order-by-aggregate.input';
import { move_meta_ailment_namesAvgOrderByAggregateInput } from './move-meta-ailment-names-avg-order-by-aggregate.input';
import { move_meta_ailment_namesMaxOrderByAggregateInput } from './move-meta-ailment-names-max-order-by-aggregate.input';
import { move_meta_ailment_namesMinOrderByAggregateInput } from './move-meta-ailment-names-min-order-by-aggregate.input';
import { move_meta_ailment_namesSumOrderByAggregateInput } from './move-meta-ailment-names-sum-order-by-aggregate.input';

@InputType()
export class move_meta_ailment_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_meta_ailment_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => move_meta_ailment_namesCountOrderByAggregateInput, {nullable:true})
    _count?: move_meta_ailment_namesCountOrderByAggregateInput;

    @Field(() => move_meta_ailment_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_meta_ailment_namesAvgOrderByAggregateInput;

    @Field(() => move_meta_ailment_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: move_meta_ailment_namesMaxOrderByAggregateInput;

    @Field(() => move_meta_ailment_namesMinOrderByAggregateInput, {nullable:true})
    _min?: move_meta_ailment_namesMinOrderByAggregateInput;

    @Field(() => move_meta_ailment_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: move_meta_ailment_namesSumOrderByAggregateInput;
}
