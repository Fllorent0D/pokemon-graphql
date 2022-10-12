import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class pokemon_colorsScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_colorsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_colorsScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_colorsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_colorsScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_colorsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_colorsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
