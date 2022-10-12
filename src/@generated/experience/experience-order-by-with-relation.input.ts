import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { growth_ratesOrderByWithRelationInput } from '../growth-rates/growth-rates-order-by-with-relation.input';

@InputType()
export class experienceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    growth_rate_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    level?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    experience?: keyof typeof SortOrder;

    @Field(() => growth_ratesOrderByWithRelationInput, {nullable:true})
    growth_rates?: growth_ratesOrderByWithRelationInput;
}
