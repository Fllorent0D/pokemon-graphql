import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StatsRelationFilter } from '../prisma/stats-relation-filter.input';
import { PokemonRelationFilter } from '../prisma/pokemon-relation-filter.input';

@InputType()
export class pokemon_statsWhereInput {

    @Field(() => [pokemon_statsWhereInput], {nullable:true})
    AND?: Array<pokemon_statsWhereInput>;

    @Field(() => [pokemon_statsWhereInput], {nullable:true})
    OR?: Array<pokemon_statsWhereInput>;

    @Field(() => [pokemon_statsWhereInput], {nullable:true})
    NOT?: Array<pokemon_statsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    base_stat?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    effort?: IntFilter;

    @Field(() => StatsRelationFilter, {nullable:true})
    stats?: StatsRelationFilter;

    @Field(() => PokemonRelationFilter, {nullable:true})
    pokemon?: PokemonRelationFilter;
}
