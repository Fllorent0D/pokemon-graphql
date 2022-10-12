import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class berry_firmnessScalarWhereWithAggregatesInput {

    @Field(() => [berry_firmnessScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<berry_firmnessScalarWhereWithAggregatesInput>;

    @Field(() => [berry_firmnessScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<berry_firmnessScalarWhereWithAggregatesInput>;

    @Field(() => [berry_firmnessScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<berry_firmnessScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
