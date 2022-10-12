import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class languagesScalarWhereWithAggregatesInput {

    @Field(() => [languagesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<languagesScalarWhereWithAggregatesInput>;

    @Field(() => [languagesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<languagesScalarWhereWithAggregatesInput>;

    @Field(() => [languagesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<languagesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    iso639?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    iso3166?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    official?: BoolWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    order?: IntNullableWithAggregatesFilter;
}
