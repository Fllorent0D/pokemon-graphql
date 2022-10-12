import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { growth_ratesOrderByWithRelationInput } from '../growth-rates/growth-rates-order-by-with-relation.input';

@InputType()
export class growth_rate_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    growth_rate_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => growth_ratesOrderByWithRelationInput, {nullable:true})
    growth_rates?: growth_ratesOrderByWithRelationInput;
}
