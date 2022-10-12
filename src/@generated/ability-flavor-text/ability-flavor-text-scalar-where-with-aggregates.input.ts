import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ability_flavor_textScalarWhereWithAggregatesInput {

    @Field(() => [ability_flavor_textScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ability_flavor_textScalarWhereWithAggregatesInput>;

    @Field(() => [ability_flavor_textScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ability_flavor_textScalarWhereWithAggregatesInput>;

    @Field(() => [ability_flavor_textScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ability_flavor_textScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ability_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_group_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    flavor_text?: StringWithAggregatesFilter;
}
