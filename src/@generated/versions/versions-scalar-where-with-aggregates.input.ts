import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class versionsScalarWhereWithAggregatesInput {

    @Field(() => [versionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<versionsScalarWhereWithAggregatesInput>;

    @Field(() => [versionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<versionsScalarWhereWithAggregatesInput>;

    @Field(() => [versionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<versionsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_group_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
