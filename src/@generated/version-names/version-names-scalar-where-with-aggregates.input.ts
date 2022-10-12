import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class version_namesScalarWhereWithAggregatesInput {

    @Field(() => [version_namesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<version_namesScalarWhereWithAggregatesInput>;

    @Field(() => [version_namesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<version_namesScalarWhereWithAggregatesInput>;

    @Field(() => [version_namesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<version_namesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
