import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class berry_firmness_namesScalarWhereWithAggregatesInput {

    @Field(() => [berry_firmness_namesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<berry_firmness_namesScalarWhereWithAggregatesInput>;

    @Field(() => [berry_firmness_namesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<berry_firmness_namesScalarWhereWithAggregatesInput>;

    @Field(() => [berry_firmness_namesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<berry_firmness_namesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    berry_firmness_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
