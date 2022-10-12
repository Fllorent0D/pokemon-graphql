import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class generationsScalarWhereWithAggregatesInput {

    @Field(() => [generationsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<generationsScalarWhereWithAggregatesInput>;

    @Field(() => [generationsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<generationsScalarWhereWithAggregatesInput>;

    @Field(() => [generationsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<generationsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    main_region_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    canonical_pokedex_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
