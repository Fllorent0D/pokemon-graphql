import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class locationsScalarWhereWithAggregatesInput {

    @Field(() => [locationsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<locationsScalarWhereWithAggregatesInput>;

    @Field(() => [locationsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<locationsScalarWhereWithAggregatesInput>;

    @Field(() => [locationsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<locationsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    region_id?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
