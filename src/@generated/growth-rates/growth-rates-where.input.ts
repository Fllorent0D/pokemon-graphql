import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ExperienceListRelationFilter } from '../prisma/experience-list-relation-filter.input';
import { Growth_rate_proseListRelationFilter } from '../prisma/growth-rate-prose-list-relation-filter.input';
import { Pokemon_speciesListRelationFilter } from '../prisma/pokemon-species-list-relation-filter.input';

@InputType()
export class growth_ratesWhereInput {

    @Field(() => [growth_ratesWhereInput], {nullable:true})
    AND?: Array<growth_ratesWhereInput>;

    @Field(() => [growth_ratesWhereInput], {nullable:true})
    OR?: Array<growth_ratesWhereInput>;

    @Field(() => [growth_ratesWhereInput], {nullable:true})
    NOT?: Array<growth_ratesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    formula?: StringFilter;

    @Field(() => ExperienceListRelationFilter, {nullable:true})
    experience?: ExperienceListRelationFilter;

    @Field(() => Growth_rate_proseListRelationFilter, {nullable:true})
    growth_rate_prose?: Growth_rate_proseListRelationFilter;

    @Field(() => Pokemon_speciesListRelationFilter, {nullable:true})
    pokemon_species?: Pokemon_speciesListRelationFilter;
}
