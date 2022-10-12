import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class contest_typesScalarWhereWithAggregatesInput {

    @Field(() => [contest_typesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<contest_typesScalarWhereWithAggregatesInput>;

    @Field(() => [contest_typesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<contest_typesScalarWhereWithAggregatesInput>;

    @Field(() => [contest_typesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<contest_typesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
