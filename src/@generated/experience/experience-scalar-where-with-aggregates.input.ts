import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class experienceScalarWhereWithAggregatesInput {

    @Field(() => [experienceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<experienceScalarWhereWithAggregatesInput>;

    @Field(() => [experienceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<experienceScalarWhereWithAggregatesInput>;

    @Field(() => [experienceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<experienceScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    growth_rate_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    level?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    experience?: IntWithAggregatesFilter;
}
