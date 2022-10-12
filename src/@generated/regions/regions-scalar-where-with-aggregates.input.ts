import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class regionsScalarWhereWithAggregatesInput {

    @Field(() => [regionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<regionsScalarWhereWithAggregatesInput>;

    @Field(() => [regionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<regionsScalarWhereWithAggregatesInput>;

    @Field(() => [regionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<regionsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
