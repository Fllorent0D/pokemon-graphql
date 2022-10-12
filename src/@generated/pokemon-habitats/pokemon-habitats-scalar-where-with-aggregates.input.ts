import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class pokemon_habitatsScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_habitatsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_habitatsScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_habitatsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_habitatsScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_habitatsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_habitatsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
