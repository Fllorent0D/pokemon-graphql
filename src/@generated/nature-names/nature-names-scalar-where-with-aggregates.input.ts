import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class nature_namesScalarWhereWithAggregatesInput {

    @Field(() => [nature_namesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<nature_namesScalarWhereWithAggregatesInput>;

    @Field(() => [nature_namesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<nature_namesScalarWhereWithAggregatesInput>;

    @Field(() => [nature_namesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<nature_namesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    nature_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
