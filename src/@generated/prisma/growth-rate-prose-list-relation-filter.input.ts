import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_rate_proseWhereInput } from '../growth-rate-prose/growth-rate-prose-where.input';

@InputType()
export class Growth_rate_proseListRelationFilter {

    @Field(() => growth_rate_proseWhereInput, {nullable:true})
    every?: growth_rate_proseWhereInput;

    @Field(() => growth_rate_proseWhereInput, {nullable:true})
    some?: growth_rate_proseWhereInput;

    @Field(() => growth_rate_proseWhereInput, {nullable:true})
    none?: growth_rate_proseWhereInput;
}
