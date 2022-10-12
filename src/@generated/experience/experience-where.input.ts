import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { Growth_ratesRelationFilter } from '../prisma/growth-rates-relation-filter.input';

@InputType()
export class experienceWhereInput {

    @Field(() => [experienceWhereInput], {nullable:true})
    AND?: Array<experienceWhereInput>;

    @Field(() => [experienceWhereInput], {nullable:true})
    OR?: Array<experienceWhereInput>;

    @Field(() => [experienceWhereInput], {nullable:true})
    NOT?: Array<experienceWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    growth_rate_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    level?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    experience?: IntFilter;

    @Field(() => Growth_ratesRelationFilter, {nullable:true})
    growth_rates?: Growth_ratesRelationFilter;
}
