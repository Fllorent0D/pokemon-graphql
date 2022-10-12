import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class pokeathlon_stat_namesScalarWhereWithAggregatesInput {

    @Field(() => [pokeathlon_stat_namesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokeathlon_stat_namesScalarWhereWithAggregatesInput>;

    @Field(() => [pokeathlon_stat_namesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokeathlon_stat_namesScalarWhereWithAggregatesInput>;

    @Field(() => [pokeathlon_stat_namesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokeathlon_stat_namesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokeathlon_stat_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
