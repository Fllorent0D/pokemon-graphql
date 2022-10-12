import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_ratesWhereInput } from '../growth-rates/growth-rates-where.input';

@InputType()
export class Growth_ratesRelationFilter {

    @Field(() => growth_ratesWhereInput, {nullable:true})
    is?: growth_ratesWhereInput;

    @Field(() => growth_ratesWhereInput, {nullable:true})
    isNot?: growth_ratesWhereInput;
}
