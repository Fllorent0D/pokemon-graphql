import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class location_namesScalarWhereWithAggregatesInput {

    @Field(() => [location_namesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<location_namesScalarWhereWithAggregatesInput>;

    @Field(() => [location_namesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<location_namesScalarWhereWithAggregatesInput>;

    @Field(() => [location_namesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<location_namesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    location_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
