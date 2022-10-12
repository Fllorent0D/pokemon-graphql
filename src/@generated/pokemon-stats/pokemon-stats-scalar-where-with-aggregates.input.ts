import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class pokemon_statsScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_statsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_statsScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_statsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_statsScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_statsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_statsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    stat_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    base_stat?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    effort?: IntWithAggregatesFilter;
}
