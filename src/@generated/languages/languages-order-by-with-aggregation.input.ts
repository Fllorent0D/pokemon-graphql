import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesCountOrderByAggregateInput } from './languages-count-order-by-aggregate.input';
import { languagesAvgOrderByAggregateInput } from './languages-avg-order-by-aggregate.input';
import { languagesMaxOrderByAggregateInput } from './languages-max-order-by-aggregate.input';
import { languagesMinOrderByAggregateInput } from './languages-min-order-by-aggregate.input';
import { languagesSumOrderByAggregateInput } from './languages-sum-order-by-aggregate.input';

@InputType()
export class languagesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    iso639?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    iso3166?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    official?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => languagesCountOrderByAggregateInput, {nullable:true})
    _count?: languagesCountOrderByAggregateInput;

    @Field(() => languagesAvgOrderByAggregateInput, {nullable:true})
    _avg?: languagesAvgOrderByAggregateInput;

    @Field(() => languagesMaxOrderByAggregateInput, {nullable:true})
    _max?: languagesMaxOrderByAggregateInput;

    @Field(() => languagesMinOrderByAggregateInput, {nullable:true})
    _min?: languagesMinOrderByAggregateInput;

    @Field(() => languagesSumOrderByAggregateInput, {nullable:true})
    _sum?: languagesSumOrderByAggregateInput;
}
